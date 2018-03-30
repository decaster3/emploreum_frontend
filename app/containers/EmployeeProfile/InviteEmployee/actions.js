/*
 *
 * InviteEmployee actions
 *
 */
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import {
  CHANGE_STATE_OPEN_VACANCIES_INVITE_EMPLOYEE,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES_INVITE_EMPLOYEE,
} from './constants';

import { getOpenVacanciesAPI } from '../../../services/api/Vacancy';
import { iviteEmployeeToVacancyAPI } from '../../../services/api/EmployeeProfile';

export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES_INVITE_EMPLOYEE, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES_INVITE_EMPLOYEE, payload: LOADED });
const notify = () => toast('You succesfully invited employee to your vacancy!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });


export const inviteEmployee = (vacancyId, employeeId) => (
  (dispatch) => {
    iviteEmployeeToVacancyAPI({ vacancyId, employeeId }, () => {
      dispatch(push('/company/employee/search/'));
      notify();
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const getOpenVacancies = (companyId) => (
  (dispatch) => {
    // dispatch(loadingOpenVacancies());
    console.log(companyId);
    return getOpenVacanciesAPI(companyId, (data) => {
      const newData = data.map((el) => {
        let position = '';
        el.profiles.forEach((prof) => {
          position = `${position} ${prof.name}`;
        });
        return {
          position: `${position} developer`,
          hoursPerWeek: `${el.duration} month(s)`,
          payment: `${el.weekPayment} eth`,
          id: el.id,
        };
      });
      dispatch({
        type: GET_OPEN_VACANCIES_INVITE_EMPLOYEE,
        payload: newData,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
