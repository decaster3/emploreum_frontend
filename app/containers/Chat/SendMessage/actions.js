/*
 *
 * CompanyFinanceContainer actions
 *
 */
import { addMessage, changeMessage } from '../MessagesCanvas/actions';
import { createMessageAPI } from '../../../services/api/Chat';

const uniqid = require('uniqid');

export const sendMessage = (message) => (
  (dispatch, getState) => {
    const userId = getState().get('userSession').get('userAuth').get('userInformation').get('id');
    const pendingMessage = {
      text: message,
      createdAt: new Date().getTime(),
      userId,
      id: uniqid(),
      status: 'pending',
      name: 'R',
    };
    dispatch(addMessage(pendingMessage));
    const chatId = getState().get('chatInterlocators').get('currentInterlocator').get('item').toJS().id;
    createMessageAPI({ chatId, text: message }, (data) => {
      dispatch(changeMessage(pendingMessage, data));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
