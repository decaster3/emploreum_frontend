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
