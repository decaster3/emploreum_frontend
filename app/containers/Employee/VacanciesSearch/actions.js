/*
 *
 * VacanciesSearch actions
 *
 */

import {
  CHANGE_STATE_VACANCIES,
  LOADING,
  LOADED,
  GET_VACANCIES,
} from './constants';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockVacanies = [{
  id: 1,
  profile: 'PHP developer',
  weekPaymeent: '200$',
  companyName: 'Company 1',
  acceptableCurrencies: ['eth', 'btc', '$'],
  description: 'qweqweqwe',
  contractDuration: '1 year',
},
{
  id: 2,
  profile: 'PHP developer',
  weekPaymeent: '200$',
  companyName: 'Company 1',
  acceptableCurrencies: ['eth', 'btc', '$'],
  description: 'qweqweqwe',
  contractDuration: '1 year',
}];

export const loadingVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADING });
export const loadedVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADED });

export const getVacancies = () => (
  (dispatch) => {
    dispatch(loadingVacancies());
    return sleep(1000).then(() => {
      dispatch({
        type: GET_VACANCIES,
        payload: mockVacanies,
      });
      dispatch(loadedVacancies());
    });
  }
);
