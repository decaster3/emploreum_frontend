/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_ABOUT_BUTTON_STATUS,
  CHOOSE_AVATAR,
} from './constants';

const initialState = fromJS({
  submittingAbout: false,
  choosenAvatar: null,
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_ABOUT_BUTTON_STATUS:
      return state
        .set('submittingAbout', !state.get('submittingAbout'));
    case CHOOSE_AVATAR:
      return state
        .set('choosenAvatar', fromJS(action.payload));
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
