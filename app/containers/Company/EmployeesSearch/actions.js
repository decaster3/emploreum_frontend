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

import { getAllEmployeesAPI } from '../../../services/api/EmployeesSearch';

export const setEmployeeLoadingState = (status) => ({ type: CHANGE_LOADING_STATE, status });
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });

export const getEmployees = () => (
  (dispatch) => {
    dispatch(setEmployeeLoadingState(LOADING));
    return getAllEmployeesAPI((data) => {
      dispatch(setEmployees(data));
      dispatch(setEmployeeLoadingState(LOADED));
    }, (err) => {
      console.log(err);
      dispatch(setEmployeeLoadingState(ERROR, []));
    }, dispatch);
  }
);
