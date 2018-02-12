/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_CURRENT_CONTRACTS,
  GET_ENDED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  CHANGE_STATE_ENDED_CONTRACTS,
} from './constants';

const initialState = fromJS({
  currentContracts: {
    items: [],
    status: NOT_LOADED,
  },
  endedContracts: {
    items: [],
    status: NOT_LOADED,
  },
});

function employeeFinanceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_CONTRACTS:
      return state.set('currentContracts', fromJS({
        status: state.get('currentContracts').get('status'),
        items: action.payload,
      }));
    case GET_ENDED_CONTRACTS:
      return state.set('endedContracts', fromJS({
        status: state.get('endedContracts').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_CURRENT_CONTRACTS:
      return state.set('currentContracts', fromJS({
        status: action.payload,
        items: state.get('currentContracts').get('items'),
      }));
    case CHANGE_STATE_ENDED_CONTRACTS:
      return state.set('endedContracts', fromJS({
        status: action.payload,
        items: state.get('endedContracts').get('items'),
      }));
    default:
      return state;
  }
}

export default employeeFinanceReducer;
