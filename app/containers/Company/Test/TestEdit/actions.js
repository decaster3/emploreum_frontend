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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loadingQuestions = () => ({ type: CHANGE_STATE_QUESTIONS, payload: LOADING });
export const loadedQuestions = () => ({ type: CHANGE_STATE_QUESTIONS, payload: LOADED });

export const loadingTestInfo = () => ({ type: CHANGE_STATE_TEST_INFO, payload: LOADING });
export const loadedTestInfo = () => ({ type: CHANGE_STATE_TEST_INFO, payload: LOADED });


const mockTest = {
  id: 1,
  name: 'JS',
};

const mockQuestions = [
  {
    id: 1,
    name: '1+1?',
    type: 'multipleChoice',
    answers: [
      {
        id: 1,
        isTrue: true,
        answer: 2,
      },
      {
        id: 2,
        isTrue: false,
        answer: 3,
      },
    ],
  },
  {
    id: 2,
    name: '2-1?',
    type: 'input',
    answers:
    [{
      id: 1,
      isTrue: true,
      answer: 1,
    }],
  },
];

export const getQuestions = (id) => (
  (dispatch) => {
    // console.log(id);
    dispatch(loadingQuestions());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_QUESTIONS,
        payload: mockQuestions,
      });
      dispatch(loadedQuestions());
    });
  }
);

export const getTestInfo = (id) => (
  (dispatch) => {
    // console.log(id);
    dispatch(loadingTestInfo());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_TEST_INFO,
        payload: mockTest,
      });
      dispatch(loadedTestInfo());
    });
  }
);
export const getQuestionsAndTestInfo = (id) => (
  (dispatch) => {
    dispatch(getTestInfo(id));
    dispatch(getQuestions(id));
  }
);
