/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectRegistrationStep,
  selectRegistrationStepStatus,
} from './selectors';

import reducer from './reducer';

import { getRegistrationStep } from './actions';

import {
  LOADING,
  LOADED,
} from './constants';

import SpecificationsStep from './SpecificationStep';
import AboutStep from '../AboutStep';

export class ContinueRegistrationCompany extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getRegistrationStep();
  }
  render() {
    switch (this.props.registrationStepStatus) {
      case LOADING:
        return (
          <div>
            Loading
          </div>
        );
      case LOADED:
        switch (this.props.registrationStep) {
          case 1:
            return (
              <SpecificationsStep />
            );
          case 2:
            return (
              <AboutStep />
            );
          default:
            return (
              <div>
                Error
              </div>
            );
        }
      default:
        return (
          <div>
            Error
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    registrationStep: selectRegistrationStep(state),
    registrationStepStatus: selectRegistrationStepStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRegistrationStep: () => dispatch(getRegistrationStep()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'continueRegistrationCompany', reducer });

ContinueRegistrationCompany.propTypes = {
  registrationStep: PropTypes.number,
  getRegistrationStep: PropTypes.func,
  registrationStepStatus: PropTypes.string,
};


export default compose(
  withReducer,
  withConnect,
)(ContinueRegistrationCompany);
