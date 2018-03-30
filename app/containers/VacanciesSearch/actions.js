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
import { getEmployeeRecomendedVacanciesAPI, submitVacancyAPI, getSearchVacanciesAPI } from './../../services/api/VacanciesSearch';

export const loadingVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADING });
export const loadedVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADED });

export const getRecomendedVacancies = () => (
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

export const getVacancies = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    currentUrl.type = 'vacancies';
    dispatch(loadingVacancies());
    return getSearchVacanciesAPI(encodeURIComponent(JSON.stringify(currentUrl)), (data) => {
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
