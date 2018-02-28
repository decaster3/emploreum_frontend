/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_ENDED_CONTRACTS,
  CHANGE_STATE_ENDED_CONTRACTS,
} from './constants';

const initialState = fromJS({
  endedContracts: {
    items: [],
    status: NOT_LOADED,
  },
});

function employeeFinanceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENDED_CONTRACTS:
      return state.set('endedContracts', fromJS({
        status: state.get('endedContracts').get('status'),
        items: action.payload,
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
