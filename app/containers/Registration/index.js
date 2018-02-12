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
  selectRole,
  selectRegistrationStep,
  selectSubmitEmailButtonState,
  selectSubmitEmailVerificationButtonState,
} from './selectors';
import reducer from './reducer';
import FirstStep from '../../components/Registration/FirstStepRegistration/Loadable';
import SecondStep from '../../components/Registration/SecondStepRegistration/Loadable';
import RoleSelectionRegistration from '../../components/Registration/RoleSelectionRegistration/Loadable';
import {
  submitEmail,
  submitEmailVerification,
  changeRole,
  downRegistrationStep,
} from './actions';

export class Registration extends React.PureComponent {
  render() {
    if (!this.props.role) {
      return (
        <RoleSelectionRegistration
          changeRole={this.props.changeRole}
        />
      );
    }
    switch (this.props.registrationStep) {
      case 1:
        return (
          <div id="wrapper">
            <FirstStep
              submitEmail={this.props.submitEmail}
              role={this.props.role}
              submittingEmail={this.props.submittingEmail}
            />
          </div>
        );
      case 2:
        return (
          <div id="wrapper">
            <SecondStep
              submitEmailVerification={this.props.submitEmailVerification}
              role={this.props.role}
              submittingEmailVerification={this.props.submittingEmailVerification}
              downRegistrationStep={this.props.downRegistrationStep}
            />
          </div>
        );
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
    role: selectRole(state),
    registrationStep: selectRegistrationStep(state),
    submittingEmail: selectSubmitEmailButtonState(state),
    submittingEmailVerification: selectSubmitEmailVerificationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRole: (evt) => dispatch(changeRole(evt)),
    submitEmail: (evt) => dispatch(submitEmail(evt)),
    submitEmailVerification: (evt) => dispatch(submitEmailVerification(evt)),
    downRegistrationStep: () => dispatch(downRegistrationStep()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registration', reducer });

Registration.propTypes = {
  role: PropTypes.string,
  submitEmail: PropTypes.func,
  submitEmailVerification: PropTypes.func,
  submittingEmail: PropTypes.bool,
  submittingEmailVerification: PropTypes.bool,
  changeRole: PropTypes.func,
  downRegistrationStep: PropTypes.func,
  registrationStep: PropTypes.number,
};


export default compose(
  withReducer,
  withConnect,
)(Registration);
