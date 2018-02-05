/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_ROLE,
  UP_REGISTRATION_STEP,
  DOWN_REGISTRATION_STEP,
} from './constants';

const initialState = fromJS({
  role: '',
  registrationStep: 1,
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROLE:
      return state
        .set('role', fromJS(action.payload))
    case UP_REGISTRATION_STEP:
      return state.set('registrationStep',
        (state.get('registrationStep') + 1))
    case DOWN_REGISTRATION_STEP:
    return state.set('registrationStep',
      (state.get('registrationStep') - 1))
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
