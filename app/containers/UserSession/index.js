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
import { selectUserStatus } from './selectors';
import Login from '../../components/Login/Loadable';
import { login } from './actions';

export class UserSession extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>User</title>
          <meta name="description" content="Description of User" />
        </Helmet>
        <Login
          login={this.props.login}
          userStatus={this.props.userStatus}
        />
      </div>
    );
  }
}

UserSession.propTypes = {
  login: PropTypes.func,
  userStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    userStatus: selectUserStatus(state),
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
