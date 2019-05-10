import React from 'react';
import listings from './airbnbs.json'
import './Page.css';
import Cart from './Cart';
import TitleBar from './TitleBar'
import Listing from './Listings';

export default class Page extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            homeList: listings,
            displayCartPage: false,
            listing:[],
            cartTotal: 0
        };
 
    }
    calcCartTotal = ()=> {
        let total = 0;
       for(let x = 0; x < this.state.listing.length; x++){
            total += this.state.listing[x].payment.cost;
       }
       return total;
    }
    showCart = () => {
        
        this.setState(prevState=>({
            displayCartPage: true,
            cartTotal: <calcCartTotal/>
        }));
    }

    showListing = ()=> {
        this.setState(prevState=>({
            displayCartPage: false
        }));
    }

    addListingToCart = (idx) => {
        const addedListing = this.state.homeList[idx];
        if(this.state.listing.includes(addedListing)){
            alert('You have already added that listing.');
            return;
        }
        this.setState( prevState=> ({
            
            listing:[...prevState.listing, addedListing]
            
        }));
    }
    deleteListingFromCart = (idx)=>{
        this.setState(prevState=>{
            const listing = [...prevState.listing];
            listing.splice(idx, 1);
            return{
                listing
            };
        });
    }
    render() {
        
       const listOfProperties = this.state.homeList
       .map((a,idx)=> <Listing 
            indListing={a} 
            key={idx}
            idx = {idx}
            onAddListing = {this.addListingToCart}
            />)

        const selectedRentals = this.state.listing
        .map((a, idx)=><Cart
            rentalListing ={a}
            key={idx}
            idx = {idx}
            deleteListing = {this.deleteListingFromCart}
            />)
            
        if(this.state.displayCartPage === false){
            return(
                <div>
                    <div className='page-cartDiv'>
                        <TitleBar 
                            cart = {this.state}
                            onShowCart = {this.showCart}
                            /></div>
                    <div>{listOfProperties}</div>
                
                </div>
            );
        }
        else{
            return(
                <div>
                    <div className='page-cartDiv'>
                        <TitleBar 
                            cart = {this.state}
                            onDeleteListing = {this.deleteListingFromCart}
                            onShowListing = {this.showListing}
                        />
                    </div>
                    <h3>Shopping Cart Total:  {this.state.cartTotal}</h3>
                <div>{selectedRentals}</div>
            </div>
            );
        }
    
    };
}
