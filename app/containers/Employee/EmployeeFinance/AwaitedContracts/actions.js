import {
  CHANGE_STATE_AWAITED_CONTRACTS,
  GET_AWAITED_CONTRACTS,
  LOADING,
  LOADED,
} from './constants';

import socket from '../../../../services/socket';
import { getAwaitedContractsAPI } from '../../../../services/api/Contracts';
import { getCurrentContracts } from '../CurrentContracts/actions';

export const loadingAwaitedContracts = () => ({ type: CHANGE_STATE_AWAITED_CONTRACTS, payload: LOADING });
export const loadedAwaitedContracts = () => ({ type: CHANGE_STATE_AWAITED_CONTRACTS, payload: LOADED });

// TODO
export const getAwaitedContracts = () => (
  (dispatch) => {
    dispatch(loadingAwaitedContracts());
    return getAwaitedContractsAPI((data) => {
      const newData = data.map((el) => ({
        duration: el.duration,
        company: el.company.name,
        salary: el.week_payment,
      }));
      dispatch({
        type: GET_AWAITED_CONTRACTS,
        payload: newData,
      });
      dispatch(loadedAwaitedContracts());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const contractConfirmationListener = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession')
      .get('userAuth').get('userInformation').get('id');

    socket.on(`${userId}:vacancy`, (data) => {
      if (data.type === 'DELETE') {
        dispatch(getCurrentContracts());
        dispatch(getAwaitedContracts());
      }
    });
  }
);

