/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectUserStatus } from './selectors';
import Login from '../../components/Login/Loadable';
import LoginWrapper from '../../components/Login/LoginWrapper/Loadable';
import ModalWrapper from '../../components/Elements/ModalWrapper/Loadable';

import { login, changeUserStateFromLoggingAferClose } from './actions';

export class UserSession extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.changeUserStateFromLoggingAferClose();
  }
  componentWillUnmount() {
    this.props.changeUserStateFromLoggingAferClose();
  }
  render() {
    if (this.props.modal) {
      return (
        <ModalWrapper title={'Login'} modalName={'login'} >
          <Login
            login={this.props.login}
            userStatus={this.props.userStatus}
            modal={this.props.modal}
          />
        </ModalWrapper>
      );
    }
    return (
      <LoginWrapper>
        <Login
          login={this.props.login}
          userStatus={this.props.userStatus}
        />
      </LoginWrapper>
    );
  }
}

UserSession.propTypes = {
  login: PropTypes.func,
  modal: PropTypes.boolean,
  userStatus: PropTypes.string,
  changeUserStateFromLoggingAferClose: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    userStatus: selectUserStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (evt, ev) => dispatch(login(evt, ev)),
    changeUserStateFromLoggingAferClose: () => dispatch(changeUserStateFromLoggingAferClose()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default compose(
  withConnect
)(UserSession);
