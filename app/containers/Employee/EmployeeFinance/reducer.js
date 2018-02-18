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
  CHANGE_STATE_AWAITED_CONTRACTS,
  GET_AWAITED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  CHANGE_STATE_ENDED_CONTRACTS,
  CHANGE_STATE_ADDRESS,
  GET_ADDRESS,
} from './constants';

const initialState = fromJS({
  awaitedContracts: {
    items: [],
    status: NOT_LOADED,
  },
  currentContracts: {
    items: [],
    status: NOT_LOADED,
  },
  endedContracts: {
    items: [],
    status: NOT_LOADED,
  },
  address: {
    name: '',
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
    case GET_AWAITED_CONTRACTS:
      return state.set('awaitedContracts', fromJS({
        status: state.get('awaitedContracts').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_AWAITED_CONTRACTS:
      return state.set('awaitedContracts', fromJS({
        status: action.payload,
        items: state.get('awaitedContracts').get('items'),
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
    case CHANGE_STATE_ADDRESS:
      return state.set('address', fromJS({
        status: action.payload,
        name: state.get('address').get('name'),
      }));
    case GET_ADDRESS:
      return state.set('address', fromJS({
        status: state.get('address').get('status'),
        name: action.payload,
      }));
    default:
      return state;
  }
}

export default employeeFinanceReducer;
