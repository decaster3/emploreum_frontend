/*
 *
 * Header reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STATE_NOTIFICATIONS,
  GET_NOTIFICATIONS,
  NOT_LOADED,
} from './constants';

const initialState = fromJS({
  notifications: {
    items: [],
    status: NOT_LOADED,
  },
});

function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return state.set('notifications', fromJS({
        status: state.get('notifications').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_NOTIFICATIONS:
      return state.set('notifications', fromJS({
        status: action.payload,
        items: state.get('notifications').get('items'),
      }));
    default:
      return state;
  }
}

export default notificationsReducer;
