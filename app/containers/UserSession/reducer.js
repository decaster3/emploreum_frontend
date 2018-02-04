/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USER_STATE,
  ANONYMOUS,
} from './constants';

const initialState = fromJS({
  userAuth: {
    userState: ANONYMOUS,
    userInformation: {},
  },
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_STATE:
      return state.set('userAuth', fromJS(action.payload));
    default:
      return state;
  }
}

export default userReducer;
