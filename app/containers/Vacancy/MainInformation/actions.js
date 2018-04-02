/*
 *
 * MainInformation actions
 *
 */

import {
  CHANGE_STATE_VACANCY_MAIN_INFO,
  LOADING,
  LOADED,
  GET_VACANCY_MAIN_INFO,
} from './constants';

import { getVacancyInfoAPI } from '../../../services/api/VacanciesSearch';

export const loadingVacanyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADING });
export const loadedVacancyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADED });


export const getVacancyMainInfo = (id) => (
  (dispatch) => {
    // dispatch(loadingVacanyMainInfo());
    getVacancyInfoAPI({ id }, (data) => {
      dispatch({
        type: GET_VACANCY_MAIN_INFO,
        payload: data,
      });
      dispatch(loadedVacancyMainInfo());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
