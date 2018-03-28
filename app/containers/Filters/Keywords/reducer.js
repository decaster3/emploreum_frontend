/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHOOSE_KEYWORD,
  DELETE_KEYWORD,
  CLEAR_KEYWORDS,
  SET_KEYWORDS,
} from './constants';

const initialState = fromJS({
  keywords: {
    list: [],
  },
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_KEYWORD:
      return state
      .set('keywords', fromJS({
        list: [...state.get('keywords').get('list').toJS(), action.payload],
      }));
    case DELETE_KEYWORD: {
      const oldList = state.get('keywords').get('list').toJS();
      const pos = oldList.findIndex((i) => i.name === action.payload);
      oldList.splice(pos, 1);
      return state
        .set('keywords', fromJS({
          list: oldList,
        }));
    }
    case SET_KEYWORDS: {
      return state
        .set('keywords', fromJS({
          list: action.payload,
        }));
    }
    case CLEAR_KEYWORDS: {
      return fromJS(initialState);
    }
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
