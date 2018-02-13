import {
  CHANGE_STATE_ENDED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
  GET_CURRENT_CONTRACTS,
  CHANGE_STATE_ADDRESS,
  GET_ADDRESS,
} from './constants';

import { getEmployeeAddressAPI } from '../../../services/api/Addresses';
import { getCurrentContractsAPI } from '../../../services/api/Contracts';

const mockContractss = [{
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
  company: 'ООО Компания 2',
  salary: 2,
  startDay: 'Oct 1, 2016',
  endDay: 'Oct 21, 2016',
}];
export const loadingEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADING });
export const loadedEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADED });

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getEndedContracts = () => (
  (dispatch) => {
    dispatch(loadingEndedContracts());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_ENDED_CONTRACTS,
        payload: mockContractss,
      });
      dispatch(loadedEndedContracts());
    });
  }
);


export const loadingCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADING });
export const loadedCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADED });

export const getCurrentContracts = () => (
  (dispatch) => {
    dispatch(loadingCurrentContracts());
    return getCurrentContractsAPI((data) => {
      const newData = data.map((el) => ({
        address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
        company: 'ООО Компания 1',
        salary: 2,
        startDay: el.begin_date,
        endDay: el.end_date,
      }));
      dispatch({
        type: GET_CURRENT_CONTRACTS,
        payload: newData,
      });
      dispatch(loadedCurrentContracts());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const loadingAddress = () => ({ type: CHANGE_STATE_ADDRESS, payload: LOADING });
export const loadedAddress = () => ({ type: CHANGE_STATE_ADDRESS, payload: LOADED });


export const getAddress = () => (
  (dispatch) => {
    dispatch(loadingAddress());
    return getEmployeeAddressAPI((data) => {
      dispatch({
        type: GET_ADDRESS,
        payload: data,
      });
      dispatch(loadedAddress());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const getAllFinance = () => (
  (dispatch) => {
    dispatch(getAddress());
    dispatch(getEndedContracts());
    dispatch(getCurrentContracts());
  }
);
