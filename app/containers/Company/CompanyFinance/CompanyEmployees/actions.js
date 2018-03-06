/*
 *
 * CompanyFinanceContainer actions
 *
 */

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
  (dispatch) => {
    dispatch(loadingEmployees());
    getCompanyWorkersAPI((data) => {
      const newData = data.map((el) =>
      ({
        avatar: el.employee.photoPath,
        name: el.employee.name,
        employeeId: el.employee.userId,
        position: 'web developer',
      }));
      dispatch({
        type: GET_EMPLOYEES,
        payload: newData,
      });
      dispatch(loadedEmployees());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
