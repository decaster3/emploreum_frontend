/*
 *
 * Skills actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  CHANGE_STATE_SPECIFICATIONS_SKILLS_VACANCY,
  LOADING,
  LOADED,
  GET_SPECIFICATIONS_SKILLS_VACANCY,
  RESET_SKILLS_VACANCY,
} from './constants';

import { getSpecificationsSkillsVacancyInfoAPI } from '../../../services/api/VacanciesSearch';

export const loadingSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS_VACANCY, payload: LOADING });
export const loadedSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS_VACANCY, payload: LOADED });
export const onCloseSkills = () => ({ type: RESET_SKILLS_VACANCY });

export const getSpecificationsSkills = (id) => (
  (dispatch, getState) => {
    // dispatch(loadingSpecificationsSkills());
    if (getState().get('skillsVacancySearch').get('specificationsSkills').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getSpecificationsSkillsVacancyInfoAPI({ id }, (data) => {
      dispatch({
        type: GET_SPECIFICATIONS_SKILLS_VACANCY,
        payload: data,
      });
      dispatch(loadedSpecificationsSkills());
      dispatch(hideLoading());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
