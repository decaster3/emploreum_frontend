import {
  CHANGE_STATE_ENDED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  CHANGE_STATE_AWAITED_CONTRACTS,
  GET_AWAITED_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
  GET_CURRENT_CONTRACTS,
  CHANGE_STATE_ADDRESS,
  GET_HEADER,
} from './constants';

import { getEmployeeAddressAPI } from '../../../services/api/Addresses';
import { getCurrentContractsAPI, getAwaitedContractsAPI } from '../../../services/api/Contracts';

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
        address: el.contract,
        company: el.company.name,
        salary: el.vacancy.week_payment,
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

export const loadingAwaitedContracts = () => ({ type: CHANGE_STATE_AWAITED_CONTRACTS, payload: LOADING });
export const loadedAwaitedContracts = () => ({ type: CHANGE_STATE_AWAITED_CONTRACTS, payload: LOADED });

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


export const loadingAddress = () => ({ type: CHANGE_STATE_ADDRESS, payload: LOADING });
export const loadedAddress = () => ({ type: CHANGE_STATE_ADDRESS, payload: LOADED });


export const getHeaderInfo = () => (
  (dispatch) => {
    dispatch(loadingAddress());
    return getEmployeeAddressAPI((data) => {
      dispatch({
        type: GET_HEADER,
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
    dispatch(getHeaderInfo());
    dispatch(getEndedContracts());
    dispatch(getCurrentContracts());
    dispatch(getAwaitedContracts());
  }
);
