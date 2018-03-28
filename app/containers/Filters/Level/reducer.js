/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_LEVEL,
  CLEAR_LEVEL,
} from './constants';

const initialState = fromJS({
  level: {
    item: 0,
  },
});

function levelFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LEVEL:
      return state
      .set('level', fromJS({
        item: action.payload,
      }));
    case CLEAR_LEVEL: {
      return fromJS(initialState);
    }
    default:
      return state;
  }
}

export default levelFilterReducer;
