/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_BUTTON_STATE,
  RESET_ENROLL_BUTTON_VACANCY,
} from './constants';

const initialState = fromJS({
  enrollButtonState: NOT_LOADED,
});

function enrollEmployeeVacancyReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUTTON_STATE:
      return state.set('enrollButtonState', fromJS(action.payload));
    case RESET_ENROLL_BUTTON_VACANCY:
      return state.set('enrollButtonState', fromJS(NOT_LOADED));
    default:
      return state;
  }
}

export default enrollEmployeeVacancyReducer;
