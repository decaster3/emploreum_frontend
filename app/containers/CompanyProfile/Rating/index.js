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

import { getCompanyRating, onCloseRatingCompanyProfile } from './actions';

import reducer from './reducer';

export class Rating extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getCompanyRating(this.props.companyProfileId);
  }
  componentWillUnmount() {
    if (!this.props.onClose) {
      this.props.onCloseRatingCompanyProfile();
    }
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
  getCompanyRating: PropTypes.func,
  onCloseRatingCompanyProfile: PropTypes.func,
  ratingStatus: PropTypes.string,
  rating: PropTypes.string,
  companyProfileId: PropTypes.string,
  onClose: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    ratingStatus: selectRatingStatus(state),
    rating: selectRatingValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCompanyRating: (evt) => dispatch(getCompanyRating(evt)),
    onCloseRatingCompanyProfile: () => dispatch(onCloseRatingCompanyProfile()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyProfileRating', reducer });

export default compose(
  withReducer,
  withConnect,
)(Rating);
