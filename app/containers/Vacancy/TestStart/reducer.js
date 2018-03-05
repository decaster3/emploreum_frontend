/*
 *
 * TestStart reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_START_TEST_BUTTON_STATUS,
} from './constants';

const initialState = fromJS({
  startingTest: false,
});

function testStartReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_START_TEST_BUTTON_STATUS:
      return state
        .set('startingTest', !state.get('startingTest'));
    default:
      return state;
  }
}

export default testStartReducer;
