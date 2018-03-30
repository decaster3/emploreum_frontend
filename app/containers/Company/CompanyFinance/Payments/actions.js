/*
 *
 * CompanyFinanceContainer actions
 *
 */

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
  (dispatch) => {
    // dispatch(loadingPayments());
    getCompanyTrasactionsAPI((data) => {
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
      console.log(err);
    }, dispatch);
  }
);
