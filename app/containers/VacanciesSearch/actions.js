/*
 *
 * VacanciesSearch actions
 *
 */

import {
  CHANGE_STATE_VACANCIES,
  LOADING,
  LOADED,
  GET_VACANCIES,
} from './constants';
// import socket from '../../../services/socket';
import { getEmployeeRecomendedVacanciesAPI, submitVacancyAPI } from './../../services/api/VacanciesSearch';

export const loadingVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADING });
export const loadedVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADED });

export const getVacancies = () => (
  (dispatch) => {
    dispatch(loadingVacancies());
    return getEmployeeRecomendedVacanciesAPI((data) => {
      dispatch({
        type: GET_VACANCIES,
        payload: data,
      });
      dispatch(loadedVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const submitVacancy = (id, companyId) => (
  (dispatch) =>
    submitVacancyAPI({ id, companyId }, () => {
      // const userId = getState().get('userSession')
      // .get('userAuth').get('userInformation').get('id');
      // socket.emit('message', { companyId, userId });
    },
    (err) => {
      console.log(err);
    }, dispatch)
);
