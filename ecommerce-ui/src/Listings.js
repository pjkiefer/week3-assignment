import React, { Component } from 'react';
import './Listings.css';


class Listing extends Component {
    render() {
        
      return (
        <div className='listing-floatLeft'>
          <img src={this.props.indListing.image} alt="scenic" className='listing-img'/>
          <h4>{this.props.indListing.title}</h4>
          <p className='listing-p'>City - {this.props.indListing.location.city}</p>
          <p className='listing-p'>Your host - {this.props.indListing.host.name}</p>
          <p className='listing-p'>Cost - {this.props.indListing.payment.cost}</p>
          <p className='listing-p'>Rating - {this.props.indListing.rating.stars} stars</p>
          <p><button className='myButton' onClick={() => this.props.onAddListing(this.props.idx)}>Add to Cart</button></p>
        </div>
      );
    }
  }
  
  export default Listing;
  