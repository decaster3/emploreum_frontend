/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  CHANGE_STATE_INTERLOCATORS,
  LOADING,
  LOADED,
  NOT_CHOOSEN,
  CHOOSEN,
  GET_INTERLOCATORS,
  CHANGE_CURRENT_INTERLOCATOR,
  CHANGE_CURRENT_INTERLOCATOR_STATUS,
} from './constants';

import { getInterlocatorsAPI } from '../../../services/api/Chat';


export const loadingInterlocators = () => ({ type: CHANGE_STATE_INTERLOCATORS, payload: LOADING });
export const loadedInterlocators = () => ({ type: CHANGE_STATE_INTERLOCATORS, payload: LOADED });
export const changeCurrentInterlocator = (interlocator) => ({ type: CHANGE_CURRENT_INTERLOCATOR, payload: interlocator });
export const choosenCurrentInterlocatorStatus = () => ({ type: CHANGE_CURRENT_INTERLOCATOR_STATUS, payload: CHOOSEN });
export const loadingCurrentInterlocatorStatus = () => ({ type: CHANGE_CURRENT_INTERLOCATOR_STATUS, payload: LOADING });
export const notChoosenCurrentInterlocatorStatus = () => ({ type: CHANGE_CURRENT_INTERLOCATOR_STATUS, payload: NOT_CHOOSEN });

export const getInterlocators = (chatId) => (
  (dispatch, getState) => {
    // dispatch(loadingInterlocators());
    dispatch(loadingCurrentInterlocatorStatus());
    getInterlocatorsAPI((data) => {
      dispatch({
        type: GET_INTERLOCATORS,
        payload: data,
      });
    }, (err) => {
      console.log(err);
    }, dispatch).then(() => {
      dispatch(loadedInterlocators());
      if (chatId) {
        const interlocator = getState().get('chatInterlocators')
        .get('interlocators').get('items').toJS().find((el) =>
          el.id === chatId) || {};
        dispatch(changeCurrentInterlocator(interlocator));
        dispatch(choosenCurrentInterlocatorStatus());
      } else {
        dispatch(notChoosenCurrentInterlocatorStatus());
      }
    });
  }
);
