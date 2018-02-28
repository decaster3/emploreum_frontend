/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_EMPLOYEES,
  CHANGE_STATE_EMPLOYEES,
} from './constants';

const initialState = fromJS({
  employees: {
    items: [],
    status: NOT_LOADED,
  },
});

function companyFinanceContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return state.set('employees', fromJS({
        status: state.get('employees').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_EMPLOYEES:
      return state.set('employees', fromJS({
        status: action.payload,
        items: state.get('employees').get('items'),
      }));
    default:
      return state;
  }
}

export default companyFinanceContainerReducer;
