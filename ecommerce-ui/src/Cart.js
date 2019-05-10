import React, {Component} from 'react';
import './Cart.css';


class Cart extends Component{
    render() {
            if(this.props.rentalListing.length === 0){
                return(
                    <h5>You have no rentals in your cart</h5>
                );
            }
        return (
          <div className='listing-floatLeft'>
            <img src={this.props.rentalListing.image} alt="scenic" className='listing-img'/>
            <h4>{this.props.rentalListing.title}</h4>
            <p className='listing-p'>City - {this.props.rentalListing.location.city}</p>
            <p className='listing-p'>Your host - {this.props.rentalListing.host.name}</p>
            <p className='listing-p'>Cost - {this.props.rentalListing.payment.cost}</p>
            <p className='listing-p'>Rating - {this.props.rentalListing.rating.stars} stars</p>
            <p><button className='myButton' onClick={() => this.props.deleteListing(this.props.idx)}>Delete From Cart</button></p>
          </div>
        );
    }
}

export default Cart;