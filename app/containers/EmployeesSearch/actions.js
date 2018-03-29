/*
 *
 * VacanciesSearch actions
 *
 */

import {
  SET_EMPLOYEES,
  CHANGE_LOADING_STATE,
  LOADING,
  LOADED,
  ERROR,
} from './constants';

import { getSearchEmployeesAPI } from './../../services/api/EmployeesSearch';

export const setEmployeeLoadingState = (status) => ({ type: CHANGE_LOADING_STATE, status });
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });


export const getEmployees = (filterUrl) => (
  (dispatch) => {
    console.log(filterUrl);
    const defaultFilter = decodeURIComponent(JSON.stringify({ type: 'employees' }));
    dispatch(setEmployeeLoadingState(LOADING));
    return getSearchEmployeesAPI(filterUrl || defaultFilter, (data) => {
      dispatch(setEmployees(data));
      dispatch(setEmployeeLoadingState(LOADED));
    }, (err) => {
      console.log(err);
      dispatch(setEmployeeLoadingState(ERROR, []));
    }, dispatch);
  }
);
