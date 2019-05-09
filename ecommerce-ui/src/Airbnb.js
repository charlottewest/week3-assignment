import React from 'react';
import './Airbnb.css';

export default class Airbnb extends React.Component {
  render() {
    const {airbnb, onClick, index} = this.props;

    return (
      <div className='airbnb-grid'>
        <img src={this.props.airbnb.image} className='airbnbImg' />
        <span className='airbnbTitle'>{this.props.airbnb.title}</span>
        <span className='airbnbCost'>${this.props.airbnb.payment.cost}</span>
        <button className='airbnbBookingButton' onClick={() => onClick(index)}>Book</button>
      </div>

    )
  }
}
