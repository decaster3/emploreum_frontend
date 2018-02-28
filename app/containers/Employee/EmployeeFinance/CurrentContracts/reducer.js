/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_CURRENT_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
} from './constants';

const initialState = fromJS({
  currentContracts: {
    items: [],
    status: NOT_LOADED,
  },
});

function employeeCurrentContractsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_CONTRACTS:
      return state.set('currentContracts', fromJS({
        status: state.get('currentContracts').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_CURRENT_CONTRACTS:
      return state.set('currentContracts', fromJS({
        status: action.payload,
        items: state.get('currentContracts').get('items'),
      }));
    default:
      return state;
  }
}

export default employeeCurrentContractsReducer;
