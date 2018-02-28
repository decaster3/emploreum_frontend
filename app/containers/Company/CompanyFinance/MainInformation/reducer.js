/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  LOADED,
  SET_HEADER,
  CHANGE_HEADER_STATE,
  CHANGE_BALANCE,
} from './constants';

const initialState = fromJS({
  header: {
    address: '',
    balance: 0,
    canBePaid: 0,
    spending: 0,
    employeeCount: 0,
    status: NOT_LOADED,
  },
});

function companyFinanceContainerReducer(state = initialState, action) {
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

export default companyFinanceContainerReducer;
