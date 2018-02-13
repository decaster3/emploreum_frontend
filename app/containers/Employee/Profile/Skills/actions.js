/*
 *
 * Skills actions
 *
 */

import { getEmployeeSpecificationsSkillsAPI } from '../../../../services/api/EmployeeProfile';

import {
  CHANGE_STATE_SPECIFICATIONS_SKILLS,
  LOADING,
  LOADED,
  GET_SPECIFICATIONS_SKILLS,
} from './constants';


export const loadingSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS, payload: LOADING });
export const loadedSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS, payload: LOADED });

export const getSpecificationsSkills = () => (
  (dispatch) => {
    dispatch(loadingSpecificationsSkills());
    return getEmployeeSpecificationsSkillsAPI((data) => {
      console.log(data);
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
