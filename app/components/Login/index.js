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
        <FormLogin
          login={this.props.login}
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

export default Login;
