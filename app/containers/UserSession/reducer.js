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
} from './constants';

const initialState = fromJS({
  userAuth: {
    userState: ANONYMOUS,
    userInformation: {},
  },
});
//не проверял
function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REGISTRATION_STEP:
      var userInfo = state.get('userAuth').get('userInformation').toJS();
      userInfo['registrationStep'] = action.payload;
      return state.set('userAuth', fromJS({
        userState: state.get('userAuth').get('userState'),
        userInformation: userInfo
      }))
    case CHANGE_USER_STATE:
      return state.set('userAuth', fromJS(action.payload));
    default:
      return state;
  }
}

export default userReducer;
