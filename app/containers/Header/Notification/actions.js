/*
 *
 * Notification actions
 *
 */

import {
  CHANGE_STATE_NOTIFICATIONS,
  GET_NOTIFICATIONS,
  LOADING,
  LOADED,
} from './constants';

import socket from '../../../services/socket';
import { getNotificationsAPI, readNotificationsAPI } from '../../../services/api/Notifications';

export const loadingNotifications = () => ({ type: CHANGE_STATE_NOTIFICATIONS, payload: LOADING });
export const loadedNotifications = () => ({ type: CHANGE_STATE_NOTIFICATIONS, payload: LOADED });

export const listenNotifications = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession')
      .get('userAuth').get('userInformation').get('id');
    socket.on(userId, () => {
      dispatch(getNotifications());
    });
  }
);

export const readNotifications = () => (
  (dispatch) => {
    readNotificationsAPI(() => {
      dispatch(getNotifications());
    }, (err) => {
      console.log(err);
      console.log('ERROR in notifications read!!!');
    }, dispatch);
  }
);

export const getNotifications = () => (
  (dispatch) => {
    dispatch(loadingNotifications());
    getNotificationsAPI((data) => {
      dispatch({
        type: GET_NOTIFICATIONS,
        payload: data,
      });
    }, (err) => {
      console.log(err);
    }, dispatch);
    dispatch(loadedNotifications());
  }
);
