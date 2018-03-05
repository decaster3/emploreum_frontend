/*
 *
 * InviteEmployee actions
 *
 */
import {
  CHANGE_STATE_TESTS_VACANCY,
  LOADING,
  LOADED,
  GET_TESTS_VACANCY,
  CHOOSE_TEST_VACANCY,
} from './constants';

import { getCompanyTestsAPI } from '../../../../services/api/CompanyTests';

export const chooseTest = (test) => ({ type: CHOOSE_TEST_VACANCY, payload: test });
export const loadingTests = () => ({ type: CHANGE_STATE_TESTS_VACANCY, payload: LOADING });
export const loadedTests = () => ({ type: CHANGE_STATE_TESTS_VACANCY, payload: LOADED });

export const getTests = () => (
  (dispatch) => {
    dispatch(loadingTests());
    getCompanyTestsAPI((data) => {
      dispatch({
        type: GET_TESTS_VACANCY,
        payload: data,
      });
      dispatch(loadedTests());
    }, (err) => {
      console.log(err);
    });
  }
);
