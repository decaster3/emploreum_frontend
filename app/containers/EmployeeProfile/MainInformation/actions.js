/*
 *
 * MainInformation actions
 *
 */

import {
  CHANGE_STATE_PROFILE_MAIN_INFO,
  LOADING,
  LOADED,
  GET_PROFILE_MAIN_INFO,
} from './constants';

import { getEmployeeProfileMainInfoAPI } from './../../../services/api/EmployeeProfile';

export const loadingProfileMainInfo = () => ({ type: CHANGE_STATE_PROFILE_MAIN_INFO, payload: LOADING });
export const loadedProfileMainInfo = () => ({ type: CHANGE_STATE_PROFILE_MAIN_INFO, payload: LOADED });


export const getProfileMainInfo = (employeeId) => (
  (dispatch) =>
    // dispatch(loadingProfileMainInfo());
    getEmployeeProfileMainInfoAPI(employeeId, (data) => {
      dispatch({
        type: GET_PROFILE_MAIN_INFO,
        payload: data,
      });
      dispatch(loadedProfileMainInfo());
    }, (err) => {
      console.log(err);
    }, dispatch)
);
