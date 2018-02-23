/*
 *
 * Tests reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_TESTS,
  CHANGE_STATE_TESTS,
} from './constants';

const initialState = fromJS({
  tests: {
    items: [],
    status: NOT_LOADED,
  },
});

function testsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TESTS:
      return state.set('tests', fromJS({
        status: state.get('tests').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_TESTS:
      return state.set('tests', fromJS({
        status: action.payload,
        items: state.get('tests').get('items'),
      }));
    default:
      return state;
  }
}

export default testsReducer;
