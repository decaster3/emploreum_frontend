/*
 *
 * VacanciesSearch reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  SET_EMPLOYEES,
  CHANGE_LOADING_STATE,
} from './constants';

const initialState = fromJS({
  employees: [],
  status: NOT_LOADED,
});

function vacanciesSearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADING_STATE:
      return state.set('status', action.status);
    case SET_EMPLOYEES:
      return state.set('employees', fromJS(
        action.employees
      ));
    default:
      return state;
  }
}

export default vacanciesSearchReducer;
