import {
  CHANGE_STATE_ENDED_CONTRACTS,
  CHANGE_STATE_CURRENT_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
  GET_CURRENT_CONTRACTS,
} from './constants';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockContractss = [{
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
  company: 'ООО Компания 2',
  salary: 2,
  startDay: 'Oct 1, 2016',
  endDay: 'Oct 21, 2016',
}];
export const loadingEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADING });
export const loadedEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADED });

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

const mockContracts = [{
  address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
  company: 'ООО Компания 1',
  salary: 2,
  startDay: 'Oct 1, 2016',
  endDay: 'Oct 21, 2016',
}];

export const loadingCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADING });
export const loadedCurrentContracts = () => ({ type: CHANGE_STATE_CURRENT_CONTRACTS, payload: LOADED });

export const getCurrentContracts = () => (
  (dispatch) => {
    dispatch(loadingCurrentContracts());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_CURRENT_CONTRACTS,
        payload: mockContracts,
      });
      dispatch(loadedCurrentContracts());
    });
  }
);

export const getAllFinance = () => (
  (dispatch) => {
    dispatch(getEndedContracts());
    dispatch(getCurrentContracts());
  }
);
