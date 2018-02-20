/**
*
* SecondStepRegistration
*
*/

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegisterSecondStep from './Form';

class SecondStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    toast('Email was sent!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
            <div className="auth-box">
              <div className="left">
                <div className="content">
                  <div className="header">
                    <p className="lead">Email verefication code</p>
                  </div>
                  <FormRegisterSecondStep
                    submitEmailVerification={this.props.submitEmailVerification}
                    submittingEmailVerification={this.props.submittingEmailVerification}
                    downRegistrationStep={this.props.downRegistrationStep}
                    role={this.props.role}
                  />
                </div>
              </div>
              <div className="right">
                <div className="overlay"></div>
                <div className="content text">
                  <h1 className="heading">Присоединить к одной из 112344 успешной компании</h1>
                  <p>Расти и зарабатывай больше</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SecondStepRegistration.propTypes = {
  submitEmailVerification: PropTypes.func,
  submittingEmailVerification: PropTypes.bool,
  downRegistrationStep: PropTypes.func,
  role: PropTypes.string,
};

export default SecondStepRegistration;
