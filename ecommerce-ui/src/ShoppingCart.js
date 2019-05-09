import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  static propTypes = {
    airbnbs: PropTypes.array,
    totalPayment: PropTypes.number
  }

  render() {
    const airbnbList = this.props.airbnbs
      .map((airbnb, index) => {
        return (
          <li key={index}>
            <span>{airbnb.title}</span>
            <button onClick={() => this.props.ondeleteAirbnb(index)}>Delete</button>
          </li>
        );
      });

    return (
      <div className='shoppingCart'>
        <ul>
          {airbnbList}
        </ul>
        <div className='totalPayment'>
          Total payment due: ${this.props.totalPayment}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
