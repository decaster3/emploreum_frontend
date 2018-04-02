/*
 *
 * Tests actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  GET_TESTS,
  CHANGE_STATE_TESTS,
  LOADING,
  LOADED,
} from './constants';
import { getCompanyTestsAPI } from '../../../../services/api/CompanyTests';


export const loadingTests = () => ({ type: CHANGE_STATE_TESTS, payload: LOADING });
export const loadedTests = () => ({ type: CHANGE_STATE_TESTS, payload: LOADED });

export const getTests = () => (
  (dispatch, getState) => {
    if (getState().get('companyTests').get('tests').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getCompanyTestsAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_TESTS,
        payload: data,
      });
      dispatch(loadedTests());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    });
  }
);
