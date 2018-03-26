/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  CHANGE_STATE_OPEN_VACANCIES,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES,
} from './constants';

import { getOpenVacanciesAPI } from '../../../../services/api/Vacancy';


export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADED });

export const getOpenVacancies = (companyId) => (
  (dispatch) => {
    dispatch(loadingOpenVacancies());
    return getOpenVacanciesAPI(companyId, (data) => {
      dispatch({
        type: GET_OPEN_VACANCIES,
        payload: data,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

