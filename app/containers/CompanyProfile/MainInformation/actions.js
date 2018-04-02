/*
 *
 * MainInformation actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
  (dispatch, getState) => {
    if (getState().get('companyProfileMainInformation').get('mainInformation').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getCompanyProfileMainInfoAPI(employeeId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_COMPANY_PROFILE_MAIN_INFO,
        payload: data,
      });
      dispatch(loadedProfileMainInfo());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
