/**
*
* FirstStepEmplRegistration
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormRegisterFirstStep from './Form';

class FirstStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
            <div className="auth-box">
              <div className="left">
                <div className="content">
                  <div className="header">
                    <p className="lead">Creation {this.props.role} account </p>
                  </div>
                  <FormRegisterFirstStep
                    submitEmail={this.props.submitEmail}
                    role={this.props.role}
                    submittingButton={this.props.submittingEmail}
                  />
                </div>
              </div>
              <div className="right">
                <div className="overlay"></div>
                <div className="content text">
                  <h1 className="heading">Be the company of the future</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
FirstStepRegistration.propTypes = {
  submitEmail: PropTypes.func,
  role: PropTypes.string,
  submittingEmail: PropTypes.bool,
};

export default FirstStepRegistration;
