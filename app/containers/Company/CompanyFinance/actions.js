/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  CHANGE_STATE_OPEN_VACANCIES,
  CHANGE_STATE_EMPLOYEES,
  CHANGE_STATE_PAYMENTS,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES,
  GET_EMPLOYEES,
  GET_PAYMENTS,
} from './constants';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockVacations = [{
  position: 'Java junior develober',
  hoursPerWeek: '25 - 40 hours/week',
  payment: '1 eth >',
}, {
  position: 'Java middle develober',
  hoursPerWeek: '35 - 40 hours/week',
  payment: '1.5 eth >',
}, {
  position: 'Phyton develober',
  hoursPerWeek: '25 - 40 hours/week',
  payment: '1 eth >',
}, {
  position: 'React JS develober',
  hoursPerWeek: '25 - 40 hours/week',
  payment: '1.5 eth >',
}];
export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADED });

export const getOpenVacancies = () => (
  (dispatch) => {
    dispatch(loadingOpenVacancies());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_OPEN_VACANCIES,
        payload: mockVacations,
      });
      dispatch(loadedOpenVacancies());
    });
  }
);

const mockEmployees = [{
  avatar: '/avatar.jpeg',
  name: 'Mickle',
  position: 'Node js developer',
  workedTime: 'working 5 years',
}, {
  avatar: '/avatar.jpeg',
  name: 'Alex',
  position: 'Java developer',
  workedTime: 'working 3 month',
}];

export const loadingEmployees = () => ({ type: CHANGE_STATE_EMPLOYEES, payload: LOADING });
export const loadedEmployees = () => ({ type: CHANGE_STATE_EMPLOYEES, payload: LOADED });

export const getEmployees = () => (
  (dispatch) => {
    dispatch(loadingEmployees());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: mockEmployees,
      });
      dispatch(loadedEmployees());
    });
  }
);

const mockPayments = [{
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd47f9bafbb',
  name: 'Mickle',
  payment: 2,
  date: 'Feb 1, 2018',
}, {
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
  name: 'Rinat',
  payment: 2,
  date: 'Feb 1, 2018',
}, {
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdas4cd4719bafbb',
  name: 'Rinat',
  payment: 2,
  date: 'Feb 1, 2018',
}, {
  address: '0xaaa89ad8ef43fcf3d3f6a2e5fdac4cd4719bafbb',
  name: 'Ilgiz',
  payment: 2,
  date: 'Feb 1, 2018',
}];

export const loadingPayments = () => ({ type: CHANGE_STATE_PAYMENTS, payload: LOADING });
export const loadedPayments = () => ({ type: CHANGE_STATE_PAYMENTS, payload: LOADED });

export const getPayments = () => (
  (dispatch) => {
    dispatch(loadingPayments());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_PAYMENTS,
        payload: mockPayments,
      });
      dispatch(loadedPayments());
    });
  }
);

export const getAllFinance = () => (
  (dispatch) => {
    dispatch(getOpenVacancies());
    dispatch(getEmployees());
    dispatch(getPayments());
  }
);
