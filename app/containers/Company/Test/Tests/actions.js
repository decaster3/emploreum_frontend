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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loadingTests = () => ({ type: CHANGE_STATE_TESTS, payload: LOADING });
export const loadedTests = () => ({ type: CHANGE_STATE_TESTS, payload: LOADED });


const mockTests = [{
  id: 1,
  name: 'JS',
  questions: [
    {
      id: 1,
      name: '1+1?',
      type: 'multyAnswer',
      answers: [
        {
          id: 1,
          isTrue: true,
          answer: 2,
        },
        {
          id: 2,
          isTrue: false,
          aswer: 3,
        },
      ],
    },
    {
      id: 2,
      name: '2-1?',
      type: 'input',
      answers:
      {
        id: 1,
        isTrue: true,
        aswer: 1,
      },
    },
  ],
},
{
  id: 2,
  name: 'JS',
  questions: [
    {
      id: 1,
      name: '1+1?',
      type: 'multyAnswer',
      answers: [
        {
          id: 1,
          isTrue: true,
          answer: 2,
        },
        {
          id: 2,
          isTrue: false,
          aswer: 3,
        },
      ],
    },
    {
      id: 2,
      name: '2-1?',
      type: 'input',
      answers:
      {
        id: 1,
        isTrue: true,
        aswer: 1,
      },
    },
  ],
}];

export const getTests = () => (
  (dispatch) => {
    dispatch(loadingTests());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_TESTS,
        payload: mockTests,
      });
      dispatch(loadedTests());
    });
  }
);
