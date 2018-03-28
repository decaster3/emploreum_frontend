/**
*
* TestCreation
*
*/

import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';

class LevelSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Rating
        {...this.props}
        initialRating={this.props.initialLevel}
        stop={10}
        onChange={(value) => this.props.changeLevel(value)}
      />
    );
  }
}

LevelSelector.propTypes = {
  changeLevel: PropTypes.func,
  initialLevel: PropTypes.string,
};

export default LevelSelector;
