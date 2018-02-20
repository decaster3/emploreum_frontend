/*
 *
 * BlockchainStatus actions
 *
 */
import socket from '../../../services/socket';
import {
  GET_BLOCKCHAIN_ASYNC_ACTIONS,
  CLEAR_ASYNC_ACTIONS,
} from './constants';

// const loading = ['contract1', 'contract2'];

export const clearAsyncActions = () => ({ type: CLEAR_ASYNC_ACTIONS });

export const getBlockchainAsynkActions = (payload) => (
  (dispatch) => {
    dispatch({ type: GET_BLOCKCHAIN_ASYNC_ACTIONS, payload });
  }
);

export const listenAsyncActions = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession')
      .get('userAuth').get('userInformation').get('id');
    socket.on(`${userId}:blockchain`, (data) => {
      console.log(data);
      if (!data.success) {
        const keys = Object.keys(data.contracts);
        const asyncActions = [];
        keys.forEach((el) => {
          asyncActions.push(data.contracts[el]);
        });
        dispatch(getBlockchainAsynkActions(asyncActions));
      } else {
        dispatch(clearAsyncActions());
      }
    });
  }
);
