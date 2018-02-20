/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_BUTTON_STATE,
} from './constants';

const initialState = fromJS({
  enrollButtonState: NOT_LOADED,
});

function employeeViewVacancyReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUTTON_STATE:
      return state.set('enrollButtonState', fromJS(action.payload));
    default:
      return state;
  }
}

export default employeeViewVacancyReducer;
