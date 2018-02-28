/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_PAYMENTS,
  CHANGE_STATE_PAYMENTS,
} from './constants';

const initialState = fromJS({
  recentPayments: {
    items: [],
    status: NOT_LOADED,
  },
});

function companyFinanceRecentPaymentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAYMENTS:
      return state.set('recentPayments', fromJS({
        status: state.get('recentPayments').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_PAYMENTS:
      return state.set('recentPayments', fromJS({
        status: action.payload,
        items: state.get('recentPayments').get('items'),
      }));
    default:
      return state;
  }
}

export default companyFinanceRecentPaymentsReducer;
