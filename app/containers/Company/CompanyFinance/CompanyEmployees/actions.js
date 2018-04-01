/*
 *
 * CompanyFinanceContainer actions
 *
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  CHANGE_STATE_EMPLOYEES,
  LOADING,
  LOADED,
  GET_EMPLOYEES,
} from './constants';

import { getCompanyWorkersAPI } from '../../../../services/api/Vacancy';


export const loadingEmployees = () => ({ type: CHANGE_STATE_EMPLOYEES, payload: LOADING });
export const loadedEmployees = () => ({ type: CHANGE_STATE_EMPLOYEES, payload: LOADED });

export const getEmployees = () => (
  (dispatch, getState) => {
    // dispatch(loadingEmployees());
    if (getState().get('companyFinanceWorkingEmployees').get('employees').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    getCompanyWorkersAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_EMPLOYEES,
        payload: data,
      });
      dispatch(loadedEmployees());
    }, (err) => {
      console.log(err);
      dispatch(hideLoading());
    }, dispatch);
  }
);
