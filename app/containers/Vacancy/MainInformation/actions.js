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

import { getCompanyInfoAPI } from '../../../services/api/VacanciesSearch';

export const loadingVacanyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADING });
export const loadedVacancyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADED });


export const getVacancyMainInfo = (id) => (
  (dispatch) => {
    dispatch(loadingVacanyMainInfo());
    getCompanyInfoAPI({ id }, (data) => {
      dispatch({
        type: GET_VACANCY_MAIN_INFO,
        payload: {
          name: data.company.name,
          info: data.company.about,
          logo: data.company.logo,
          city: data.company.city,
        },
      });
    }, (err) => {
      console.log(err);
    }, dispatch);
    dispatch(loadedVacancyMainInfo());
  }
);
