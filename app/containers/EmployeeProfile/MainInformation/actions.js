/*
 *
 * MainInformation actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
  (dispatch, getState) => {
    if (getState().get('employeeProfileMainInformation').get('mainInformation').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    dispatch(loadingProfileMainInfo());
    return getEmployeeProfileMainInfoAPI(employeeId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_PROFILE_MAIN_INFO,
        payload: data,
      });
      dispatch(loadedProfileMainInfo());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
