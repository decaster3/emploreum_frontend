/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USER_STATE,
  ANONYMOUS,
  UPDATE_REGISTRATION_STEP,
  COMPLETE_REGISTRATION,
  NEXT_REGISTRATION_STEP,
  SKIP_LAST_STEP,
} from './constants';

const initialState = fromJS({
  userAuth: {
    userState: ANONYMOUS,
    userInformation: {},
  },
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REGISTRATION_STEP: {
      const userInfo = state.get('userAuth').get('userInformation').toJS();
      userInfo.registrationStep = action.payload;
      return state.set('userAuth', fromJS({
        userState: state.get('userAuth').get('userState'),
        userInformation: userInfo,
      }));
    }
    case COMPLETE_REGISTRATION: {
      const userInfo = state.get('userAuth').get('userInformation').toJS();
      userInfo.photoPath = action.payload;
      delete userInfo.registrationStep;
      return state.set('userAuth', fromJS({
        userState: state.get('userAuth').get('userState'),
        userInformation: userInfo,
      }));
    }
    case SKIP_LAST_STEP: {
      const userInfo = state.get('userAuth').get('userInformation').toJS();
      delete userInfo.registrationStep;
      return state.set('userAuth', fromJS({
        userState: state.get('userAuth').get('userState'),
        userInformation: userInfo,
      }));
    }
    case CHANGE_USER_STATE:
      return state.set('userAuth', fromJS(action.payload));
    case NEXT_REGISTRATION_STEP: {
      const userInfo = state.get('userAuth').get('userInformation').toJS();
      userInfo.registrationStep += 1;
      return state.set('userAuth', fromJS({
        userState: state.get('userAuth').get('userState'),
        userInformation: userInfo,
      }));
    }
    default:
      return state;
  }
}

export default userReducer;
