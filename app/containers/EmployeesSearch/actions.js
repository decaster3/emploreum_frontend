/*
 *
 * VacanciesSearch actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { push } from 'react-router-redux';
import {
  SET_EMPLOYEES,
  CHANGE_LOADING_STATE,
  LOADED,
  ERROR,
} from './constants';

import { getSearchEmployeesAPI, startChatAPI } from './../../services/api/EmployeesSearch';

export const setEmployeeLoadingState = (status) => ({ type: CHANGE_LOADING_STATE, status });
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });


export const getEmployees = (filter) => (
  (dispatch) => {
    return getSearchEmployeesAPI(filter, (data) => {
      dispatch(hideLoading());
      dispatch(setEmployees(data));
      dispatch(setEmployeeLoadingState(LOADED));
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
      dispatch(setEmployeeLoadingState(ERROR, []));
    }, dispatch);
  }
);
export const startChat = (userId) => (
  (dispatch) => {
    return startChatAPI(userId, (chatId) => {
      dispatch(push(`/user/chat/${chatId}/`));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
