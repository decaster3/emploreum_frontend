/*
 *
 * Skills actions
 *
 */

import { getEmployeeSpecificationsSkillsAPI } from './../../../services/api/EmployeeProfile';

import {
  CHANGE_STATE_SPECIFICATIONS_SKILLS_EMPLOYEE,
  LOADING,
  LOADED,
  GET_SPECIFICATIONS_SKILLS_EMPLOYEE,
} from './constants';


export const loadingSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS_EMPLOYEE, payload: LOADING });
export const loadedSpecificationsSkills = () => ({ type: CHANGE_STATE_SPECIFICATIONS_SKILLS_EMPLOYEE, payload: LOADED });

export const getSpecificationsSkills = (employeeId) => (
  (dispatch) => {
    // dispatch(loadingSpecificationsSkills());
    return getEmployeeSpecificationsSkillsAPI(employeeId, (data) => {
      dispatch({
        type: GET_SPECIFICATIONS_SKILLS_EMPLOYEE,
        payload: data,
      });
      dispatch(loadedSpecificationsSkills());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
