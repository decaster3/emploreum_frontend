/*
 *
 * CompanyFinanceContainer actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  CHANGE_STATE_PAYMENTS,
  LOADING,
  LOADED,
  GET_PAYMENTS,
} from './constants';

import { getCompanyTrasactionsAPI } from '../../../../services/api/Transactions';

export const loadingPayments = () => ({ type: CHANGE_STATE_PAYMENTS, payload: LOADING });
export const loadedPayments = () => ({ type: CHANGE_STATE_PAYMENTS, payload: LOADED });

export const getPayments = () => (
  (dispatch, getState) => {
    // dispatch(loadingPayments());
    if (getState().get('companyFinanceRecentPayments').get('recentPayments').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getCompanyTrasactionsAPI((data) => {
      dispatch(hideLoading());
      const newData = data.map((el) => ({
        address: el.transactionHash,
        payment: el.amount,
        date: el.createdAt,
        name: el.work.employee.name,
      }));
      dispatch({
        type: GET_PAYMENTS,
        payload: newData,
      });
      dispatch(loadedPayments());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
