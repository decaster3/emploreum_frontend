/**
*
* Login
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormLogin from './Form';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle">
            <div className="auth-box">
              <div className="left">
                <div className="content">
                  <div className="header">
                  </div>
                  <div>
                    <FormLogin
                      login={this.props.login}
                      userStatus={this.props.userStatus}
                    />
                  </div>
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

Login.propTypes = {
  login: PropTypes.func,
  userStatus: PropTypes.string,
};

export default Login;
