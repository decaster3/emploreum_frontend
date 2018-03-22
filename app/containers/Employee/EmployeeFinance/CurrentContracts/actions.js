import {
  CHANGE_STATE_CURRENT_CONTRACTS,
  LOADING,
  LOADED,
  GET_CURRENT_CONTRACTS,
} from './constants';

import { getCurrentContractsAPI } from '../../../../services/api/Contracts';

export const loadingCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADING });
export const loadedCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADED });

export const getCurrentContracts = () => (
  (dispatch) => {
    dispatch(loadingCurrentContracts());
    return getCurrentContractsAPI((data) => {
      dispatch({
        type: GET_CURRENT_CONTRACTS,
        payload: data,
      });
      dispatch(loadedCurrentContracts());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
