import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  LOADING,
  CHANGE_HEADER_STATE,
  SET_HEADER,
  CHANGE_BALANCE,
  LOADED,
} from './constants';

import socket from '../../../../services/socket';
import { getEmployeeHeaderDataAPI } from '../../../../services/api/FinanceHeaderData';

export const headerLoading = () => ({ type: CHANGE_HEADER_STATE, state: LOADING });

export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, balance });

export const balanceChangeListener = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession')
      .get('userAuth').get('userInformation').get('id');

    socket.on(`${userId}:balance`, (data) => {
      if (data.balance) {
        dispatch(changeBalance(data.balance));
      } else {
        console.log('Connection error, balance doesn\'t been sent');
      }
    });
  }
);

export const getHeaderInfo = () => (
  (dispatch, getState) => {
    if (getState().get('employeeFinanceMainInformation').get('header').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getEmployeeHeaderDataAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: SET_HEADER,
        payload: data,
      });
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
