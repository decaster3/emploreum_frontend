/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  NOT_CHOOSEN,
  CHOOSEN,
  GET_INTERLOCATORS,
  CHANGE_STATE_INTERLOCATORS,
  CHANGE_CURRENT_INTERLOCATOR,
  CHANGE_CURRENT_INTERLOCATOR_STATUS,
} from './constants';

const initialState = fromJS({
  interlocators: {
    items: [],
    status: NOT_LOADED,
  },
  currentInterlocator: {
    status: NOT_CHOOSEN,
    item: {},
  },
});

function interlocatorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INTERLOCATORS:
      return state.set('interlocators', fromJS({
        status: state.get('interlocators').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_INTERLOCATORS:
      return state.set('interlocators', fromJS({
        status: action.payload,
        items: state.get('interlocators').get('items'),
      }));
    case CHANGE_CURRENT_INTERLOCATOR:
      return state.set('currentInterlocator', fromJS({
        status: CHOOSEN,
        item: action.payload,
      }));
    case CHANGE_CURRENT_INTERLOCATOR_STATUS:
      return state.set('currentInterlocator', fromJS({
        status: action.payload,
        item: state.get('currentInterlocator').get('item'),
      }));
    default:
      return state;
  }
}

export default interlocatorsReducer;
