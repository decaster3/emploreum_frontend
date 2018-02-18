/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectNotificationsStatus,
  selectNotificationsItems,
  selectNotificationsCount,
 } from './selectors';
import { getNotifications, listenNotifications } from './actions';
import Notification from '../../../components/Header/Notification/Loadable';
import reducer from './reducer';
import NotificationsWrapper from '../../../components/Header/Notifications/Loadable';

export class Notifications extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.listenNotifications();
    this.props.getNotifications();
  }

  renderNotifications() {
    if (this.props.notificationStatus === 'LOADING') {
      return (<div />);
    }
    return this.props.notifications.map((notification) => (
      <Notification
        key={notification}
        message={notification}
      />
    ));
  }
  render() {
    const notifications = this.renderNotifications();
    return (
      <NotificationsWrapper notificationsCount={this.props.notificationsCount}>
        { notifications }
      </NotificationsWrapper>
    );
  }
}

Notifications.propTypes = {
  getNotifications: PropTypes.func.isRequired,
  listenNotifications: PropTypes.func.isRequired,
  notificationStatus: PropTypes.string,
  notifications: PropTypes.array,
  notificationsCount: PropTypes.number,
};


function mapStateToProps(state) {
  return {
    notificationStatus: selectNotificationsStatus(state),
    notifications: selectNotificationsItems(state),
    notificationsCount: selectNotificationsCount(state),
  };
}


function mapDispatchToProps(dispatch) {
  return {
    getNotifications: () => dispatch(getNotifications()),
    listenNotifications: () => dispatch(listenNotifications()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'notifications', reducer });

export default compose(
  withReducer,
  withConnect,
)(Notifications);
