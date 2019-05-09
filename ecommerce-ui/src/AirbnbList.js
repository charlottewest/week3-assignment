import React from 'react';
import PropTypes from 'prop-types';
import Airbnb from './Airbnb';
import './Airbnb.css';

export default class AirbnbList extends React.Component {
  static propTypes = {
    airbnbs: PropTypes.array
  }

  render() {
    const airbnbList = this.props.airbnbs
      .map((airbnb, index) => {
        return (
          <Airbnb
            airbnb={airbnb}
            onClick={this.props.onbookAirbnb}
            index={index}
            key={index}
          />
          );
      });

    return (
      <div>
        <div className='airbnbSection'>
          {airbnbList}
        </div>
      </div>
    );
  }
}
