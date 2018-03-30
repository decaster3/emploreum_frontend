/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  LOADING,
  CHANGE_BALANCE,
  CHANGE_HEADER_STATE,
  SET_HEADER,
} from './constants';

import socket from '../../../../services/socket';
import { getCompanyAddressAPI } from '../../../../services/api/FinanceHeaderData';

export const headerLoading = () => ({ type: CHANGE_HEADER_STATE, state: LOADING });
export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, balance });


export const getHeaderInfo = () => (
  (dispatch) =>
    // dispatch(headerLoading());
    getCompanyAddressAPI((data) => {
      dispatch({
        type: SET_HEADER,
        payload: data,
      });
    }, (err) => {
      console.log(err);
    }, dispatch)
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
