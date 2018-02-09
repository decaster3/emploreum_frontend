/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_OPEN_VACANCIES,
  GET_EMPLOYEES,
  GET_PAYMENTS,
  CHANGE_STATE_OPEN_VACANCIES,
  CHANGE_STATE_EMPLOYEES,
  CHANGE_STATE_PAYMENTS,
} from './constants';

const initialState = fromJS({
  openVacancies: {
    items: [],
    status: NOT_LOADED,
  },
  recentPayments: {
    items: [],
    status: NOT_LOADED,
  },
  employees: {
    items: [],
    status: NOT_LOADED,
  },
});

function companyFinanceContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OPEN_VACANCIES:
      return state.set('openVacancies', fromJS({
        status: state.get('openVacancies').get('status'),
        items: action.payload,
      }));
    case GET_EMPLOYEES:
      return state.set('employees', fromJS({
        status: state.get('employees').get('status'),
        items: action.payload,
      }));
    case GET_PAYMENTS:
      return state.set('recentPayments', fromJS({
        status: state.get('recentPayments').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_OPEN_VACANCIES:
      return state.set('openVacancies', fromJS({
        status: action.payload,
        items: state.get('openVacancies').get('items'),
      }));
    case CHANGE_STATE_EMPLOYEES:
      return state.set('employees', fromJS({
        status: action.payload,
        items: state.get('employees').get('items'),
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

export default companyFinanceContainerReducer;
