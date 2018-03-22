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
  CLEAR_NAVIGATION_TEST_REDUCER,
  MARK_QWESTION_AS_VIEWED,
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
    case CLEAR_NAVIGATION_TEST_REDUCER:
      return fromJS(initialState);
    case MARK_QWESTION_AS_VIEWED: {
      const newItems = state.get('testQuestions').get('items').toJS();
      const oldItemIndex = newItems.findIndex((x) =>
      x.id === action.payload);
      newItems[oldItemIndex].viewed = true;
      return state.set('testQuestions', fromJS({
        status: state.get('testQuestions').get('status'),
        items: newItems,
      }));
    }
    default:
      return state;
  }
}

export default testNavigationReducer;
