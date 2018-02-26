/*
 *
 * TestNavigation actions
 *
 */

import {
  CHANGE_STATE_TEST_QESTIONS,
  CHANGE_CURRENT_QUESTION,
  GET_TEST_QUESTIONS,
  LOADING,
  LOADED,
} from './constants';
import { getVacancyTestQuestionsAPI } from '../../../../services/api/EmployeeTests';

export const loadingTestQuestions = () => ({ type: CHANGE_STATE_TEST_QESTIONS, payload: LOADING });
export const loadedTestQuestions = () => ({ type: CHANGE_STATE_TEST_QESTIONS, payload: LOADED });

export const changeCurrentQuestion = (currentQuestion) => (
  (dispatch) => {
    dispatch({ type: CHANGE_CURRENT_QUESTION, payload: currentQuestion });
  }
);
export const getTestQuestionCount = (vacancyId) => (
  (dispatch) => {
    dispatch(loadingTestQuestions());
    getVacancyTestQuestionsAPI(vacancyId, (data) => {
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
      dispatch(changeCurrentQuestion(newData[0]));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

// export const changeQuestion = (questionId) => {
//     // redirect to  /employee/vacancy/vacancyId/test/questionId
//   };

// export const nextQuestion = () => {
//     // getState() get next question
//     // redirect to  /employee/vacancy/vacancyId/test/NEXTQUESTION
//   };

// export const submitTest = () => {
//     // redirect to  /employee/vacancy/vacancyId/
//   };

