/*
 *
 * MainInformation actions
 *
 */

import {
  CHANGE_STATE_COMPANY_PROFILE_MAIN_INFO,
  LOADING,
  LOADED,
  GET_COMPANY_PROFILE_MAIN_INFO,
} from './constants';

import { getCompanyProfileMainInfoAPI } from './../../../services/api/CompanyProfile';

export const loadingProfileMainInfo = () => ({ type: CHANGE_STATE_COMPANY_PROFILE_MAIN_INFO, payload: LOADING });
export const loadedProfileMainInfo = () => ({ type: CHANGE_STATE_COMPANY_PROFILE_MAIN_INFO, payload: LOADED });


export const getProfileMainInfo = (employeeId) => (
  (dispatch) =>
    // dispatch(loadingProfileMainInfo());
     getCompanyProfileMainInfoAPI(employeeId, (data) => {
       dispatch({
         type: GET_COMPANY_PROFILE_MAIN_INFO,
         payload: data,
       });
       dispatch(loadedProfileMainInfo());
     }, (err) => {
       console.log(err);
     }, dispatch)
);
