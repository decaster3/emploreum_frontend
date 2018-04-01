import {
  CHANGE_STATE_ENDED_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
} from './constants';

const mockContractss = [];

export const loadingEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADING });
export const loadedEndedContracts = () => ({ type: CHANGE_STATE_ENDED_CONTRACTS, payload: LOADED });

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getEndedContracts = () => (
  (dispatch) => sleep(1000).then(() => {
    dispatch({
      type: GET_ENDED_CONTRACTS,
      payload: mockContractss,
    });
    dispatch(loadedEndedContracts());
  })
);

