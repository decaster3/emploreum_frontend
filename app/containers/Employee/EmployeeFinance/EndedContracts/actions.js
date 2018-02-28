import {
  CHANGE_STATE_ENDED_CONTRACTS,
  LOADING,
  LOADED,
  GET_ENDED_CONTRACTS,
} from './constants';

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

