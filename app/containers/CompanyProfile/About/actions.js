/*
 *
 * MainInformation actions
 *
 */

import {
  CHANGE_STATE_ABOUT_COMPANY_INFO,
  LOADING,
  LOADED,
  GET_ABOUT_COMPANY_INFO,
} from './constants';

import { getCompanyProfileMainInfoAPI } from './../../../services/api/CompanyProfile';

export const loadingProfileMainInfo = () => ({ type: CHANGE_STATE_ABOUT_COMPANY_INFO, payload: LOADING });
export const loadedProfileMainInfo = () => ({ type: CHANGE_STATE_ABOUT_COMPANY_INFO, payload: LOADED });


export const getAboutCompanyInfo = (employeeId) => (
  (dispatch) => {
    dispatch(loadingProfileMainInfo());
    return getCompanyProfileMainInfoAPI(employeeId, (data) => {
      dispatch({
        type: GET_ABOUT_COMPANY_INFO,
        payload: data,
      });
      dispatch(loadedProfileMainInfo());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
