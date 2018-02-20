/*
 *
 * Candidates reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_STATE_CANDIDATES,
  GET_CANDIDATES,
} from './constants';

const initialState = fromJS({
  candidates: {
    items: [],
    status: NOT_LOADED,
  },
});

function candidatesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES:
      return state.set('candidates', fromJS({
        status: state.get('candidates').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_CANDIDATES:
      return state.set('candidates', fromJS({
        status: action.payload,
        items: state.get('candidates').get('items'),
      }));
    default:
      return state;
  }
}

export default candidatesReducer;
