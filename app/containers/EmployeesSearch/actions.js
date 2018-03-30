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


export const getEmployees = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    currentUrl.type = 'employees';
    dispatch(setEmployeeLoadingState(LOADING));
    return getSearchEmployeesAPI(encodeURIComponent(JSON.stringify(currentUrl)), (data) => {
      dispatch(setEmployees(data));
      dispatch(setEmployeeLoadingState(LOADED));
    }, (err) => {
      console.log(err);
      dispatch(setEmployeeLoadingState(ERROR, []));
    }, dispatch);
  }
);
