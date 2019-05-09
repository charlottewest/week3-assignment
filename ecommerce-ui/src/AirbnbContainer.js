import React from 'react';
import Airbnb from './Airbnb';
import PropTypes from 'prop-types';
import './Airbnb.css';

class AirbnbContainer extends React.Component {
  render() {
    console.log(this.props.articles)
    return (
      <div className='airbnbSection'>
        {this.props.articles.map((article, index) => (
          <Airbnb
            article={article}
            key={ index }
          />
        ))}
        <button onClick={this.props.onAddAirbnb}>Add</button>
      </div>
    )
  }
}

 AirbnbContainer.propTypes = {
  articles: PropTypes.array

 }
export default AirbnbContainer;
