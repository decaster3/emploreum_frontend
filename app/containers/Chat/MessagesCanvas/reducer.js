/*
 *
 * CompanyFinanceContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_MESSAGES,
  CHANGE_STATE_MESSAGES,
  CHANGE_MESSAGE_IN_CHAT,
  ADD_MESSAGE_TO_CHAT,
} from './constants';

const initialState = fromJS({
  messages: {
    items: [],
    status: NOT_LOADED,
  },
});

function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return state.set('messages', fromJS({
        status: state.get('messages').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_MESSAGES:
      return state.set('messages', fromJS({
        status: action.payload,
        items: state.get('messages').get('items'),
      }));
    case ADD_MESSAGE_TO_CHAT:
      return state.set('messages', fromJS({
        status: state.get('messages').get('status'),
        items: [...state.get('messages').get('items').toJS(), action.payload],
      }));
    case CHANGE_MESSAGE_IN_CHAT: {
      const messages = state.get('messages').get('items').toJS();
      const messageId = messages.findIndex((el) => el.id === action.payload.oldMessage.id);
      messages[messageId] = action.payload.newMessage;
      return state.set('messages', fromJS({
        status: state.get('messages').get('status'),
        items: messages,
      }));
    }
    default:
      return state;
  }
}

export default messagesReducer;
