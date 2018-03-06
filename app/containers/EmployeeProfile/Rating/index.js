/**
 *
 * MainInformation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectRatingStatus,
  selectRatingValue,
} from './selectors';

import { getEmployeeRating } from './actions';

import reducer from './reducer';

export class Rating extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEmployeeRating(this.props.employeeId);
  }
  render() {
    return (
      <div className="padding-bottom-30">
        {this.props.ratingStatus === 'LOADED'
          ? <h3>Rating is: {this.props.rating}</h3>
          : <h3>Loading...</h3>
        }
      </div>
    );
  }
}

Rating.propTypes = {
  getEmployeeRating: PropTypes.func,
  ratingStatus: PropTypes.string,
  rating: PropTypes.string,
  employeeId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    ratingStatus: selectRatingStatus(state),
    rating: selectRatingValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeeRating: (evt) => dispatch(getEmployeeRating(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeProfileRating', reducer });

export default compose(
  withReducer,
  withConnect,
)(Rating);
