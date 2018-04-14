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
  selectAddLoginButtonState,
} from './selectors';
import reducer from './reducer';
import FirstStep from '../../components/Registration/FirstStepRegistration/Loadable';
import SecondStep from '../../components/Registration/SecondStepRegistration/Loadable';
import ThirdStep from '../../components/Registration/ThirdStepRegistration/Loadable';
import {
  submitEmail,
  submitEmailVerification,
  downRegistrationStep,
  clearReducer,
  addLogin,
} from './actions';

export class Registration extends React.PureComponent {
  componentDidMount() {
    this.hideActiveModal();
  }
  componentWillUnmount() {
    this.props.clearReducer();
  }
  // закрыть модальное окно, после редиректа.
  hideActiveModal() {
    if (document.getElementsByClassName('modal-backdrop')[0]) {
      const fade = document.getElementsByClassName('modal-backdrop')[0];
      fade.className = '';
    }
    if (document.getElementsByClassName('modal-open')[0]) {
      const modal = document.getElementsByClassName('modal-open')[0];
      modal.className = modal.className.replace('modal-open', '');
    }
  }
  render() {
    console.log(this.props.registrationStep);
    switch (this.props.registrationStep) {
      case 1:
        return (
          <div id="wrapper">
            <FirstStep
              submitEmail={this.props.submitEmail}
              submittingEmail={this.props.submittingEmail}
            />
          </div>
        );
      case 2:
        return (
          <div id="wrapper">
            <SecondStep
              submitEmailVerification={this.props.submitEmailVerification}
              submittingEmailVerification={this.props.submittingEmailVerification}
              downRegistrationStep={this.props.downRegistrationStep}
            />
          </div>
        );
      case 3:
        return (
          <div id="wrapper">
            <ThirdStep
              addLogin={this.props.addLogin}
              pending={this.props.loginPending}
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
    loginPending: selectAddLoginButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitEmail: (evt) => dispatch(submitEmail(evt)),
    submitEmailVerification: (evt) => dispatch(submitEmailVerification(evt)),
    addLogin: (evt) => dispatch(addLogin(evt)),
    downRegistrationStep: () => dispatch(downRegistrationStep()),
    clearReducer: () => dispatch(clearReducer()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registration', reducer });

Registration.propTypes = {
  submitEmail: PropTypes.func,
  submitEmailVerification: PropTypes.func,
  addLogin: PropTypes.func,
  submittingEmail: PropTypes.bool,
  submittingEmailVerification: PropTypes.bool,
  loginPending: PropTypes.bool,
  downRegistrationStep: PropTypes.func,
  clearReducer: PropTypes.func,
  registrationStep: PropTypes.number,
};


export default compose(
  withReducer,
  withConnect,
)(Registration);
