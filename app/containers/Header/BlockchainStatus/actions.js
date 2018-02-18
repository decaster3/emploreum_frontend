/*
 *
 * BlockchainStatus actions
 *
 */

import {
  GET_BLOCKCHAIN_ASYNC_ACTIONS,
} from './constants';

const loading = ['contract1', 'contract2'];

export const getBlockchainAsynkActions = () => (
  (dispatch) => {
    dispatch({ type: GET_BLOCKCHAIN_ASYNC_ACTIONS, payload: loading });
  }
);
