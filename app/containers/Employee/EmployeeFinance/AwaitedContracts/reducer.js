/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_STATE_AWAITED_CONTRACTS,
  GET_AWAITED_CONTRACTS,
} from './constants';

const initialState = fromJS({
  awaitedContracts: {
    items: [],
    status: NOT_LOADED,
  },
});

function employeeFinanceReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default employeeFinanceReducer;
