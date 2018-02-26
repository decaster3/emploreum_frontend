/*
 *
 * TestNavigation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_CURRENT_QUESTION,
  CHANGE_STATE_TEST_QESTIONS,
  GET_TEST_QUESTIONS,
} from './constants';

const initialState = fromJS({
  testQuestions: {
    items: [],
    status: NOT_LOADED,
  },
  currentQuestion: {},
});

function testNavigationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEST_QUESTIONS:
      return state.set('testQuestions', fromJS({
        status: state.get('testQuestions').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_TEST_QESTIONS:
      return state.set('testQuestions', fromJS({
        status: action.payload,
        items: state.get('testQuestions').get('items'),
      }));
    case CHANGE_CURRENT_QUESTION:
      return state.set('currentQuestion', fromJS(action.payload));
    default:
      return state;
  }
}

export default testNavigationReducer;
