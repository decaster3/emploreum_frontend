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
  CHANGE_HEADER_STATE,
  LOADED,
  SET_HEADER,
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
  header: {
    address: '',
    balance: '',
    income: '',
    endedContractsCount: '',
    currentContractsCount: '',
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
    case CHANGE_HEADER_STATE:
      return state.setIn(['header', 'status'], action.state);
    case SET_HEADER:
      return state.set('header', fromJS({
        ...action.payload,
        status: LOADED,
      }));
    default:
      return state;
  }
}

export default employeeFinanceReducer;
