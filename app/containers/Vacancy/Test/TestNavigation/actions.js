/*
 *
 * TestNavigation actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_STATE_TEST_QESTIONS,
  CHANGE_CURRENT_QUESTION,
  GET_TEST_QUESTIONS,
  LOADING,
  LOADED,
  CLEAR_NAVIGATION_TEST_REDUCER,
  MARK_QWESTION_AS_VIEWED,
} from './constants';
import { getVacancyTestQuestionsAPI, submitTestAPI } from '../../../../services/api/EmployeeTests';

export const loadingTestQuestions = () => ({ type: CHANGE_STATE_TEST_QESTIONS, payload: LOADING });
export const loadedTestQuestions = () => ({ type: CHANGE_STATE_TEST_QESTIONS, payload: LOADED });
export const clearReducer = () => ({ type: CLEAR_NAVIGATION_TEST_REDUCER });
export const markAsViewed = (questionId) => ({ type: MARK_QWESTION_AS_VIEWED, payload: questionId });
export const changeCurrentQuestion = (currentQuestion) => (
  (dispatch) => {
    dispatch({ type: CHANGE_CURRENT_QUESTION, payload: currentQuestion });
  }
);

export const getTestQuestionCount = (vacancyId, currentQuestionId) => (
  (dispatch, getState) => {
    dispatch(loadingTestQuestions());
    return getVacancyTestQuestionsAPI(vacancyId, (data) => {
      const newData = data.questions.map((el, index, array) => ({
        id: el.id,
        viewId: index + 1,
        viewed: el.viewed,
        nextId: index + 1 !== array.length ? array[index + 1].id : null,
        vacancyId,
      }));
      dispatch({
        type: GET_TEST_QUESTIONS,
        payload: newData,
      });
      dispatch(loadedTestQuestions());

      if (currentQuestionId) {
        const question = getState().get('testNavigation')
        .get('testQuestions').get('items').toJS().find((el) =>
          el.id === currentQuestionId) || undefined;
        dispatch(changeCurrentQuestion(question));
      } else {
        dispatch(changeCurrentQuestion(newData[0]));
      }
    }, (err) => {
      if (err.response.status && err.response.status === 405) {
        dispatch(push(`/employee/vacancy/${vacancyId}/`));
      }
    }, dispatch);
  }
);


export const submitTest = (vacancyId) => (
  (dispatch) => {
    submitTestAPI(vacancyId, () => {
      dispatch(push(`/employee/vacancy/${vacancyId}/`));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const nextQuestion = () => (
  (dispatch, getState) => {
    const nextQuestionItem = getState().get('testNavigation')
      .get('testQuestions').get('items').toJS().find((el) =>
        el.id === getState().get('testNavigation').get('currentQuestion').toJS().nextId) || undefined;
    const vacancyId = getState().get('testNavigation').get('currentQuestion').get('vacancyId');
    if (nextQuestionItem) {
      dispatch(changeCurrentQuestion(nextQuestionItem));
      dispatch(push(`/employee/vacancy/${vacancyId}/test/${nextQuestionItem.id}`));
    } else {
      dispatch(submitTest(vacancyId));
    }
  }
);
