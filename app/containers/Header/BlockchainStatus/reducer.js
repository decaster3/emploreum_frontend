/*
 *
 * BlockchainStatus reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_BLOCKCHAIN_ASYNC_ACTIONS,
  CLEAR_ASYNC_ACTIONS,
} from './constants';

const initialState = fromJS({
  asyncActions: [],
});

function blockchainStatusReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOCKCHAIN_ASYNC_ACTIONS:
      return state.set('asyncActions', fromJS(action.payload));
    case CLEAR_ASYNC_ACTIONS:
      return state.set('asyncActions', fromJS([]));
    default:
      return state;
  }
}

export default blockchainStatusReducer;
