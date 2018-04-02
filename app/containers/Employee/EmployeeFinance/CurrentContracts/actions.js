import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
  (dispatch, getState) => {
    if (getState().get('employeeFinanceCurrentContracts').get('currentContracts').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getCurrentContractsAPI((data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_CURRENT_CONTRACTS,
        payload: data,
      });
      dispatch(loadedCurrentContracts());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);
