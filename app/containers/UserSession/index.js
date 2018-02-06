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
import { Redirect } from 'react-router-dom';
import { selectUserAuth } from './selectors';
import Login from '../../components/Login/Loadable';
import { login } from './actions';
import { ANONYMOUS } from './constants';

export class UserSession extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    if (this.props.userAuth.get('userState') !== ANONYMOUS) {
      return <Redirect to="/" />;
    }
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
  userAuth: PropTypes.object,
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
