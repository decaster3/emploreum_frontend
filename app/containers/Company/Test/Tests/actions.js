/*
 *
 * Tests actions
 *
 */

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
  (dispatch) => {
    dispatch(loadingTests());
    getCompanyTestsAPI((data) => {
      dispatch({
        type: GET_TESTS,
        payload: data,
      });
      dispatch(loadedTests());
    }, (err) => {
      console.log(err);
    });
  }
);
