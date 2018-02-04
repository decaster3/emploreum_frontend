/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { selectUserAuth } from './selectors';
import Login from '../../components/Login/Loadable';
import { login } from './actions';

export class UserSession extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>User</title>
          <meta name="description" content="Description of User" />
        </Helmet>
        <Login
          login={this.props.login}
        />
      </div>
    );
  }
}

UserSession.propTypes = {
  login: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    userAuth: selectUserAuth(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (evt, ev) => dispatch(login(evt, ev)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withConnect
)(UserSession);
