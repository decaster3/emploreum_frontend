/*
 *
 * Skills actions
 *
 */

import {
  CHANGE_STATE_SPECIFICATIONS_SKILLS,
  LOADING,
  LOADED,
  GET_SPECIFICATIONS_SKILLS,
} from './constants';

import { getSpecificationsSkillsVacancyInfoAPI } from '../../../services/api/VacanciesSearch';

export const loadingSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS, payload: LOADING });
export const loadedSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS, payload: LOADED });

export const getSpecificationsSkills = (id) => (
  (dispatch) => {
    dispatch(loadingSpecificationsSkills());
    return getSpecificationsSkillsVacancyInfoAPI({ id }, (data) => {
      dispatch({
        type: GET_SPECIFICATIONS_SKILLS,
        payload: data,
      });
      dispatch(loadedSpecificationsSkills());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
