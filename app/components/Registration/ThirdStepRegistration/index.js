/**
*
* ThirdStepRegistration
*
*/

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import LoginForm from './Form';

class ThirdStepRegistration extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    toast('You guessed!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
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
                    <p className="lead">Login</p>
                  </div>
                  <LoginForm
                    addLogin={this.props.addLogin}
                    pending={this.props.pending}
                    downRegistrationStep={this.props.downRegistrationStep}
                  />
                </div>
              </div>
              <div className="right">
                <div className="overlay"></div>
                <div className="content text">
                  <h1 className="heading">Присоединить к одному из 112344 успешных чатов</h1>
                  <p>Расти и будь здоров!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ThirdStepRegistration.propTypes = {
  addLogin: PropTypes.func,
  pending: PropTypes.bool,
  downRegistrationStep: PropTypes.func,
};

export default ThirdStepRegistration;
