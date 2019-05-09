import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import Airbnb from './Airbnb';
import AirbnbList from './AirbnbList';
import Airbnbs from './airbnbs.json';
import './App.css';
import './Airbnb.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      airbnbs: Airbnbs,
      selectedAirbnbs: [],
      totalPayment: 0
    }
  }

  bookAirbnb = (index) => {
    const selectedAirbnb = this.state.airbnbs[index];
    if (this.state.selectedAirbnbs.includes(selectedAirbnb)) {
      alert('You already selected that listing.');
      return;
    }

    const newPayment = this.state.totalPayment + selectedAirbnb.payment.cost;

    this.setState(prevState => {
      return {
        selectedAirbnbs: [...prevState.selectedAirbnbs, selectedAirbnb],
        totalPayment: newPayment
      };
    });
  }

  deleteAirbnb = (index) => {
    this.setState(prevState => {
      const selectedAirbnb = this.state.selectedAirbnbs[index];
      const newSelectedAirbnbs = [...this.state.selectedAirbnbs];
      newSelectedAirbnbs.splice(index, 1);
      const newPayment = this.state.totalPayment - selectedAirbnb.payment.cost;

      return {
        selectedAirbnbs: newSelectedAirbnbs,
        totalPayment: newPayment
      };
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='shoppingCartContainer'>
          <h2>Shopping Cart</h2>
          <ShoppingCart
            airbnbs={this.state.selectedAirbnbs}
            ondeleteAirbnb={this.deleteAirbnb}
            totalPayment={this.state.totalPayment}
          />
        </div>
        <hr />
        <div className='availablePropertiesContainer'>
          <h2>Available Properties</h2>
          <AirbnbList
            airbnbs={this.state.airbnbs}
            onbookAirbnb={this.bookAirbnb}
          />
        </div>
      </div>
    );
  }
}

export default App;
