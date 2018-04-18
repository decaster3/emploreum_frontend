/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_COMPANY_PROFILE_OPEN_VACANCIES,
  CHANGE_STATE_COMPANY_PROFILE_OPEN_VACANCIES,
  RESET_OPEN_VACANCIES_COMPANY_PROFILE,
} from './constants';

const initialState = fromJS({
  openVacancies: {
    items: [],
    status: NOT_LOADED,
  },
});

function companyFinanceContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_PROFILE_OPEN_VACANCIES:
      return state.set('openVacancies', fromJS({
        status: state.get('openVacancies').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_COMPANY_PROFILE_OPEN_VACANCIES:
      return state.set('openVacancies', fromJS({
        status: action.payload,
        items: state.get('openVacancies').get('items'),
      }));
    case RESET_OPEN_VACANCIES_COMPANY_PROFILE:
      return state.set('openVacancies', fromJS({
        items: [],
        status: NOT_LOADED,
      }));
    default:
      return state;
  }
}

export default companyFinanceContainerReducer;
