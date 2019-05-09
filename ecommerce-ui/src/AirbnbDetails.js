import React from 'react';
import PropTypes from 'prop-types';

 class AirbnbDetails extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
    return (
        <div className="name-date">
          <h4>{ this.props.name }</h4>
        </div>
    )
  }
}

 AirbnbDetails.propTypes = {
  name: PropTypes.string
}

 export default AirbnbDetails;
