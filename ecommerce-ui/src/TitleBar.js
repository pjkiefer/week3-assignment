import React, {Component} from 'react';
import './TitleBar.css';
import shoppingCart from './image/cart.jpg';

class TitleBar extends Component{
    render(){
        const rentalCount = this.props.cart.listing.length;
       const showCart = this.props.cart.displayCartPage;
        

        
        if(showCart === false){
        return(
            <div className='cart-div'>
            <div className='cart-leftDiv'>&nbsp;</div>
            <div className='cart-middleDiv'>
                <span className='cart-title'>Vacation Paradise Rentals</span>
            </div>
            <div className='cart-rightDiv'>
                <img src={shoppingCart} alt='cart icon' className='cart-img'></img>
                <button onClick={this.props.onShowCart} className='titleBar-Button'>Number of Rentals: {rentalCount}</button>
                
                </div>
            </div>
            
        );
        }
        else{
            return(
                <div className='cart-div'>
                <div className='cart-leftDiv'>&nbsp;</div>
                <div className='cart-middleDiv'>
                    <span className='cart-title'>Vacation Paradise Rentals</span>
                </div>
                <div className='cart-rightDiv'>
                    <img src={shoppingCart} alt='cart icon' className='cart-img'></img>
                    <button onClick={this.props.onShowListing} className='titleBar-Button'>Back to Listings...</button>
                    
                    </div>
                </div>
                
            );
        }
    }
}

export default TitleBar;