/*
 *
 * InviteEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_OPEN_VACANCIES_INVITE_EMPLOYEE,
  CHANGE_STATE_OPEN_VACANCIES_INVITE_EMPLOYEE,
  NOT_LOADED,
} from './constants';

const initialState = fromJS({
  openVacancies: {
    items: [],
    status: NOT_LOADED,
  },
});


function inviteEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OPEN_VACANCIES_INVITE_EMPLOYEE:
      return state.set('openVacancies', fromJS({
        status: state.get('openVacancies').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_OPEN_VACANCIES_INVITE_EMPLOYEE:
      return state.set('openVacancies', fromJS({
        status: action.payload,
        items: state.get('openVacancies').get('items'),
      }));
    default:
      return state;
  }
}

export default inviteEmployeeReducer;
