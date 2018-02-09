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

import {
  getRegistrationStep,
} from './actions';

import {
  LOADING,
  LOADED,
} from './constants';

import SpecificationStep from './SpecificationSkillsStep/Loadable';
import AboutStep from './AboutStep/Loadable';

export class ContinueRegistrationEmployee extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getRegistrationStep();
  }
  render() {
    switch (this.props.registrationStepStatus) {
      case LOADING:
        return (
          <div>
            Loadingggg
          </div>
        );
      case LOADED:
        switch (this.props.registrationStep) {
          case 1:
            return (
              <SpecificationStep />
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
const withReducer = injectReducer({ key: 'continueRegistrationEmployee', reducer });

ContinueRegistrationEmployee.propTypes = {
  registrationStep: PropTypes.number,
  getRegistrationStep: PropTypes.func,
  registrationStepStatus: PropTypes.string,
};


export default compose(
  withReducer,
  withConnect,
)(ContinueRegistrationEmployee);
