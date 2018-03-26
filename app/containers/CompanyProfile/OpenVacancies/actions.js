/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  CHANGE_STATE_COMPANY_PROFILE_OPEN_VACANCIES,
  LOADING,
  LOADED,
  GET_COMPANY_PROFILE_OPEN_VACANCIES,
} from './constants';

import { getOpenVacanciesAPI } from './../../../services/api/Vacancy';


export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_COMPANY_PROFILE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_COMPANY_PROFILE_OPEN_VACANCIES, payload: LOADED });

export const getOpenVacancies = (companyProfileId) => (
  (dispatch) => {
    dispatch(loadingOpenVacancies());
    return getOpenVacanciesAPI(companyProfileId, (data) => {
      dispatch({
        type: GET_COMPANY_PROFILE_OPEN_VACANCIES,
        payload: data,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

