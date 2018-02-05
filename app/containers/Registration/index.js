/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import {
  selectRole,
  selectRegistrationStep,
} from './selectors';
import reducer from './reducer';
import FirstStep from '../../components/Registration/FirstStepRegistration/Loadable';
import SecondStep from '../../components/Registration/SecondStepRegistration/Loadable';
import RoleSelectionRegistration from '../../components/Registration/RoleSelectionRegistration/Loadable';
import {
  submitEmail,
  submitEmailVerification,
  changeRole,
} from './actions';

export class Registration extends React.Component {
  render() {
    // if (this.props.userAuth.get('userState') !== ANONYMOUS)
    //   return <Redirect to='/'/>;
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
          <div>
            <FirstStep
              submitEmail={this.props.submitEmail}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <SecondStep
              submitEmailVerification={this.props.submitEmailVerification}
              role={this.props.role}
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRole: (evt) => dispatch(changeRole(evt)),
    submitEmail: (evt) => dispatch(submitEmail(evt)),
    submitEmailVerification: (evt) => dispatch(submitEmailVerification(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registration', reducer });

Registration.propTypes = {
  role: PropTypes.string,
  submitEmail: PropTypes.func,
  submitEmailVerification: PropTypes.func,
  changeRole: PropTypes.func,
  registrationStep: PropTypes.number,
};


export default compose(
  withReducer,
  withConnect,
)(Registration);
