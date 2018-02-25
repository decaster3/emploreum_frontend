/*
 *
 * InviteEmployee actions
 *
 */
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';
import {
  CHANGE_STATE_OPEN_VACANCIES,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES,
} from './constants';

import { getOpenVacanciesAPI } from '../../../services/api/Vacancy';
import { iviteEmployeeToVacancyAPI } from '../../../services/api/EmployeeProfile';

export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADED });
const notify = () => toast('You succesfully invited employee to your vacancy!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });


export const inviteEmployee = (vacancyId, employeeId) => (
  (dispatch) => {
    console.log({ vacancyId, employeeId });
    iviteEmployeeToVacancyAPI({ vacancyId, employeeId }, () => {
      dispatch(push('/company/finance'));
      notify();
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const getOpenVacancies = () => (
  (dispatch) => {
    dispatch(loadingOpenVacancies());
    return getOpenVacanciesAPI((data) => {
      const newData = data.map((el) => {
        let position = '';
        el.profiles.forEach((prof) => {
          position = `${position} ${prof.name}`;
        });
        return {
          position: `${position} developer`,
          hoursPerWeek: `${el.duration} month(s)`,
          payment: `${el.week_payment} eth`,
          id: el.id,
        };
      });
      dispatch({
        type: GET_OPEN_VACANCIES,
        payload: newData,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
