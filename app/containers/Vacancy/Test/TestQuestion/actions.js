/*
 *
 * TestQuestion actions
 *
 */
import { toast } from 'react-toastify';
import { push } from 'react-router-redux';
import {
  CHANGE_SUBMIT_QUESTION_BUTTON_STATUS,
  GET_QUESTION,
  CHANGE_STATE_QUESTION,
  LOADING,
  LOADED,
} from './constants';
import { getVacancyTestQuestionAPI, submitVacancyTestQuestionAPI } from '../../../../services/api/EmployeeTests';
import { nextQuestion } from '../TestNavigation/actions';

const notify = () => toast('Time is out!', { hideProgressBar: true, autoClose: 10000000, type: toast.TYPE.ERROR });
const changeSubmitQuestionButtonState = () => ({ type: CHANGE_SUBMIT_QUESTION_BUTTON_STATUS });
const loadingQuestion = () => ({ type: CHANGE_STATE_QUESTION, payload: LOADING });
const loadedQuestion = () => ({ type: CHANGE_STATE_QUESTION, payload: LOADED });

export const submitQuestion = (values, type) => (
  (dispatch, getState) => {
    const questionId = getState().get('testNavigation').get('currentQuestion').get('id');
    dispatch(changeSubmitQuestionButtonState());
    submitVacancyTestQuestionAPI({ questionId, answers: values.toJS(), type }, () => {
      dispatch(changeSubmitQuestionButtonState());
      dispatch(nextQuestion());
    }, (err) => {
      dispatch(changeSubmitQuestionButtonState());
      const vacancyId = getState().get('testNavigation').get('currentQuestion').get('vacancyId');
      if (err.response.status && err.response.status === 405) {
        notify();
        dispatch(push(`/employee/vacancy/${vacancyId}/`));
      }
    }, dispatch);
  }
);

export const getQuestion = (questionId) => (
  (dispatch, getState) => {
    dispatch(loadingQuestion());
    getVacancyTestQuestionAPI(questionId, (question) => {
      dispatch({
        type: GET_QUESTION,
        payload: question,
      });
      dispatch(loadedQuestion());
    }, (err) => {
      const vacancyId = getState().get('testNavigation').get('currentQuestion').get('vacancyId');
      if (err.response.status && err.response.status === 405) {
        notify();
        dispatch(push(`/employee/vacancy/${vacancyId}/`));
      }
    }, dispatch);
  }
);
