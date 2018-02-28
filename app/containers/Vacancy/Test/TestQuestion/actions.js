/*
 *
 * TestQuestion actions
 *
 */
import { push } from 'react-router-redux';

import {
  CHANGE_SUBMIT_QUESTION_BUTTON_STATUS,
  GET_QUESTION,
  CHANGE_STATE_QUESTION,
  LOADING,
  LOADED,
} from './constants';
import { getVacancyTestQuestionAPI } from '../../../../services/api/EmployeeTests';

const changeSubmitQuestionButtonState = () => ({ type: CHANGE_SUBMIT_QUESTION_BUTTON_STATUS });
const loadingQuestion = () => ({ type: CHANGE_STATE_QUESTION, payload: LOADING });
const loadedQuestion = () => ({ type: CHANGE_STATE_QUESTION, payload: LOADED });

export const submitQuestion = (values) => (
  (dispatch, getState) => {
    const current = getState().get('testNavigation').get('currentQuestion').toJS();
    dispatch(changeSubmitQuestionButtonState());
    console.log(values.toJS());
    dispatch(changeSubmitQuestionButtonState());
    dispatch(push(`/employee/vacancy/${current.vacancyId}/test/${current.nextId}`));
  }
);

export const submitMultipleQuestion = (values) => (
  (dispatch, getState) => {
    const current = getState().get('testNavigation').get('currentQuestion').toJS();
    dispatch(changeSubmitQuestionButtonState());
    console.log(values.toJS());
    dispatch(changeSubmitQuestionButtonState());
    dispatch(push(`/employee/vacancy/${current.vacancyId}/test/${current.nextId}`));
  }
);

export const getQuestion = (questionId) => (
  (dispatch) => {
    dispatch(loadingQuestion());
    getVacancyTestQuestionAPI(questionId, (question) => {
      dispatch({
        type: GET_QUESTION,
        payload: question,
      });
      dispatch(loadedQuestion());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
