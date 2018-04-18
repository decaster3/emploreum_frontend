/*
 *
 * MainInformation actions
 *
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  CHANGE_STATE_ABOUT_COMPANY_INFO,
  LOADING,
  LOADED,
  GET_ABOUT_COMPANY_INFO,
  RESET_ABOUT_COMPANY_PROFILE,
} from './constants';

import { getCompanyProfileMainInfoAPI } from './../../../services/api/CompanyProfile';

export const onCloseAboutCompanyProfile = () => ({ type: RESET_ABOUT_COMPANY_PROFILE });

export const loadingProfileMainInfo = () => ({ type: CHANGE_STATE_ABOUT_COMPANY_INFO, payload: LOADING });
export const loadedProfileMainInfo = () => ({ type: CHANGE_STATE_ABOUT_COMPANY_INFO, payload: LOADED });


export const getAboutCompanyInfo = (employeeId) => (
  (dispatch, getState) => {
    if (getState().get('companyProfileAbout').get('mainInformation').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    // dispatch(loadingProfileMainInfo());
    getCompanyProfileMainInfoAPI(employeeId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_ABOUT_COMPANY_INFO,
        payload: data,
      });
      dispatch(loadedProfileMainInfo());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
