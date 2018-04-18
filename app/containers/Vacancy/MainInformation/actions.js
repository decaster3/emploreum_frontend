/*
 *
 * MainInformation actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  CHANGE_STATE_VACANCY_MAIN_INFO,
  LOADING,
  LOADED,
  GET_VACANCY_MAIN_INFO,
  RESET_MAIN_INFO_VACANCY,
} from './constants';

import { getVacancyInfoAPI } from '../../../services/api/VacanciesSearch';

export const loadingVacanyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADING });
export const loadedVacancyMainInfo = () => ({ type: CHANGE_STATE_VACANCY_MAIN_INFO, payload: LOADED });
export const onCloseMainInfo = () => ((dispatch) => dispatch({ type: RESET_MAIN_INFO_VACANCY }));


export const getVacancyMainInfo = (id) => (
  (dispatch, getState) => {
    // dispatch(loadingVacanyMainInfo());
    if (getState().get('vacancyMainInformation').get('mainInformation').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    getVacancyInfoAPI({ id }, (data) => {
      dispatch({
        type: GET_VACANCY_MAIN_INFO,
        payload: data,
      });
      dispatch(loadedVacancyMainInfo());
      dispatch(hideLoading());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
