/*
 *
 * TestEdit actions
 *
 */

import {
  GET_QUESTIONS,
  GET_TEST_INFO,
  CHANGE_STATE_TEST_INFO,
  CHANGE_STATE_QUESTIONS,
  LOADING,
  LOADED,
} from './constants';
import { getEditTestInfoAPI, getEditTestQuestionAPI } from '../../../../services/api/CompanyTests';


export const loadingQuestions = () => ({ type: CHANGE_STATE_QUESTIONS, payload: LOADING });
export const loadedQuestions = () => ({ type: CHANGE_STATE_QUESTIONS, payload: LOADED });

export const loadingTestInfo = () => ({ type: CHANGE_STATE_TEST_INFO, payload: LOADING });
export const loadedTestInfo = () => ({ type: CHANGE_STATE_TEST_INFO, payload: LOADED });

export const getQuestions = (id) => (
  (dispatch) => {
    dispatch(loadingQuestions());
    getEditTestQuestionAPI(id, (data) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: data,
      });
      dispatch(loadedQuestions());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const getTestInfo = (id) => (
  (dispatch) => {
    dispatch(loadingTestInfo());
    getEditTestInfoAPI(id, (data) => {
      dispatch({
        type: GET_TEST_INFO,
        payload: data,
      });
      dispatch(loadedTestInfo());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
// todo
export const getQuestionsAndTestInfo = (id) => (
  (dispatch) => {
    dispatch(getTestInfo(id));
    dispatch(getQuestions(id));
  }
);
