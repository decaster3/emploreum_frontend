/*
 *
 * CompanyFinanceContainer actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  LOADING,
  CHANGE_BALANCE,
  CHANGE_HEADER_STATE,
  SET_HEADER,
  LOADED,
} from './constants';

import socket from '../../../../services/socket';
import { getCompanyAddressAPI } from '../../../../services/api/FinanceHeaderData';

export const headerLoading = () => ({ type: CHANGE_HEADER_STATE, state: LOADING });
export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, balance });


export const getHeaderInfo = () => (
  (dispatch, getState) => {
    // dispatch(headerLoading());
    if (getState().get('companyFinanceMainInfo').get('header').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getCompanyAddressAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: SET_HEADER,
        payload: data,
      });
    }, (err) => {
      console.log(err);
      dispatch(hideLoading());
    }, dispatch);
  }
);

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

export const getAllHeader = () => (
  (dispatch) => {
    dispatch(balanceChangeListener());
    dispatch(getHeaderInfo());
  }
);
