import {
  CHANGE_STATE_ENDED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  CHANGE_STATE_AWAITED_CONTRACTS,
  GET_AWAITED_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
  GET_CURRENT_CONTRACTS,
  CHANGE_HEADER_STATE,
  SET_HEADER,
  CHANGE_BALANCE,
} from './constants';

import socket from '../../../services/socket';
import { getEmployeeHeaderDataAPI } from '../../../services/api/FinanceHeaderData';
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


export const headerLoading = () => ({ type: CHANGE_HEADER_STATE, state: LOADING });

export const changeBalance = (balance) => ({ type: CHANGE_BALANCE, balance });

export const balanceChangeListener = () => (
  (dispatch, getState) => {
    const userId = getState().get('userSession')
      .get('userAuth').get('userInformation').get('id');

    socket.on(`${userId}:balance`, (data) => {
      if (data.balance) {
        dispatch(changeBalance(data.balance));
      } else {
        console.log('Connection error, balance doesn\'t been sent');
      }
    });
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

export const getHeaderInfo = () => (
  (dispatch) => {
    dispatch(headerLoading());
    return getEmployeeHeaderDataAPI((data) => {
      dispatch({
        type: SET_HEADER,
        payload: data,
      });
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
    dispatch(balanceChangeListener());
    dispatch(contractConfirmationListener());
  }
);
