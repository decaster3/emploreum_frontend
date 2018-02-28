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
  CHANGE_SUBMIT_EMAIL_BUTTON_STATE,
  CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE,
  CLEAR,
} from './constants';
const initialState = fromJS({
  role: '',
  registrationStep: 1,
  submittingEmail: false,
  submittingEmailVerification: false,
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_EMAIL_BUTTON_STATE:
      return state
        .set('submittingEmail', !state.get('submittingEmail'));
    case CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE:
      return state
        .set('submittingEmailVerification', !state.get('submittingEmailVerification'));
    case CHANGE_ROLE:
      return state
        .set('role', fromJS(action.payload));
    case UP_REGISTRATION_STEP:
      return state.set('registrationStep',
        (state.get('registrationStep') + 1));
    case DOWN_REGISTRATION_STEP:
      return state.set('registrationStep',
        (state.get('registrationStep') - 1));
    case CLEAR:
      return fromJS(initialState);
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
