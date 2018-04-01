/*
 *
 * VacanciesSearch actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
  (dispatch, getState) => {
    if (getState().get('vacanciesSearch').get('vacancies').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getEmployeeRecomendedVacanciesAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_VACANCIES,
        payload: data,
      });
      dispatch(loadedVacancies());
    }, (err) => {
      dispatch(hideLoading());
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
    if (getState().get('vacanciesSearch').get('vacancies').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getSearchVacanciesAPI(encodeURIComponent(JSON.stringify(currentUrl)), (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_VACANCIES,
        payload: data,
      });
      dispatch(loadedVacancies());
    }, (err) => {
      dispatch(hideLoading());
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
