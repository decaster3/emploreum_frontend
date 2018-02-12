/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_VACANCY_BUTTON_STATUS,
} from './constants';

const initialState = fromJS({
  submittingVacancy: false,
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_VACANCY_BUTTON_STATUS:
      return state
        .set('submittingSpecification', !state.get('submittingSpecification'));
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
