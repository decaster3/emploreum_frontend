/*
 *
 * StartPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ROLE,
  NONE,
} from './constants';

const initialState = fromJS({
  role: NONE,
});

function startPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROLE: {
      return {
        ...state,
        role: action.payload,
      };
    }
    default:
      return state;
  }
}

export default startPageReducer;
