/*
 *
 * VacanciesSearch reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  CHANGE_STATE_VACANCIES,
  GET_VACANCIES,
} from './constants';

const initialState = fromJS({
  vacancies: {
    items: [],
    status: NOT_LOADED,
  },
});

function vacanciesSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VACANCIES:
      return state.set('vacancies', fromJS({
        status: state.get('vacancies').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_VACANCIES:
      return state.set('vacancies', fromJS({
        status: action.payload,
        items: state.get('vacancies').get('items'),
      }));
    default:
      return state;
  }
}

export default vacanciesSearchReducer;
