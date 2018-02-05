/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({counter: 0});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
        .set('counter', state.get('counter') + 1)
    default:
      return state;
  }
}

export default testReducer;
