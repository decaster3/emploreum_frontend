/*
 *
 * CompanyFinanceContainer actions
 *
 */
import socket from '../../../services/socket';
import {
  CHANGE_STATE_MESSAGES,
  LOADING,
  LOADED,
  GET_MESSAGES,
  ADD_MESSAGE_TO_CHAT,
  CHANGE_MESSAGE_IN_CHAT,
} from './constants';

import { getMessagesByIdAPI } from '../../../services/api/Chat';


export const loadingMessages = () => ({ type: CHANGE_STATE_MESSAGES, payload: LOADING });
export const loadedMessages = () => ({ type: CHANGE_STATE_MESSAGES, payload: LOADED });

export const addMessage = (message) => ({ type: ADD_MESSAGE_TO_CHAT, payload: message });
export const changeMessage = (oldMessage, newMessage) => ({ type: CHANGE_MESSAGE_IN_CHAT, payload: { oldMessage, newMessage } });

export const getMessages = () => (
  (dispatch, getState) => {
    const currentInteractorId = getState().get('chatInterlocators').get('currentInterlocator').get('item').toJS().id;
    dispatch(loadingMessages());
    getMessagesByIdAPI(currentInteractorId, (data) => {
      dispatch({
        type: GET_MESSAGES,
        payload: data,
      });
      dispatch(loadedMessages());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const listenForNewMessages = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession').get('userAuth').get('userInformation').get('id');
    const currentInteractorId = getState().get('chatInterlocators').get('currentInterlocator').get('item').toJS().id;
    socket.on(`${userId}:${currentInteractorId}:messages`, (data) => {
      console.log(data);
      dispatch(addMessage(data));
    });
  }
);
