/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_HEADER_STATE,
  CHANGE_BALANCE,
  LOADED,
  SET_HEADER,
} from './constants';

const initialState = fromJS({
  header: {
    address: '',
    balance: 0,
    income: 0,
    endedContractsCount: 0,
    currentContractsCount: 0,
    status: NOT_LOADED,
  },
});

function employeeFinanceReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_STATE:
      return state.setIn(['header', 'status'], action.state);
    case CHANGE_BALANCE:
      return state.setIn(['header', 'balance'], action.balance);
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
