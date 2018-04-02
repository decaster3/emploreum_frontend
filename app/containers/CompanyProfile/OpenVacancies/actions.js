/*
 *
 * CompanyFinanceContainer actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
  (dispatch, getState) => {
    if (getState().get('companyProfileeOpenVacancies').get('openVacancies').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getOpenVacanciesAPI(companyProfileId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_COMPANY_PROFILE_OPEN_VACANCIES,
        payload: data,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);

