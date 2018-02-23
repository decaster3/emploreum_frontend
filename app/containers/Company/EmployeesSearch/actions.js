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

// import socket from '../../../services/socket';

import { getAllEmployeesAPI } from '../../../services/api/EmployeesSearch';

export const setEmployeeLoadingState = (status) => ({ type: CHANGE_LOADING_STATE, status });
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });

export const getEmployees = () => (
  (dispatch) => {
    dispatch(setEmployeeLoadingState(LOADING));
    return getAllEmployeesAPI((data) => {
      const employees = data.map((employee) => ({
        id: employee.id,
        name: employee.name,
        profile: employee.profile,
      }));
      console.log(employees);
      dispatch(setEmployees(employees));
      dispatch(setEmployeeLoadingState(LOADED));
    }, (err) => {
      console.log(err);
      dispatch(setEmployeeLoadingState(ERROR, []));
    }, dispatch);
  }
);
