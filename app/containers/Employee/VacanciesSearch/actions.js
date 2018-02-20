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
// import socket from '../../../services/socket';
import { getEmployeeRecomendedVacanciesAPI, submitVacancyAPI } from '../../../services/api/VacanciesSearch';

export const loadingVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADING });
export const loadedVacancies = () => ({ type: CHANGE_STATE_VACANCIES, payload: LOADED });

export const getVacancies = () => (
  (dispatch) => {
    dispatch(loadingVacancies());
    return getEmployeeRecomendedVacanciesAPI((data) => {
      const newData = data.map((element) => ({
        id: element.id,
        companyId: element.company_id,
        profile: 'Web developer',
        weekPaymeent: `${element.week_payment} ETH/month`,
        companyName: `${element.name}`,
        acceptableCurrencies: ['eth', 'btc', '$'],
        description: element.info,
        contractDuration: `${element.duration} months`,
      }));
      dispatch({
        type: GET_VACANCIES,
        payload: newData,
      });
      dispatch(loadedVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const submitVacancy = (id, companyId) => (
  (dispatch) =>
    submitVacancyAPI({ id, companyId }, () => {
      // const userId = getState().get('userSession')
      // .get('userAuth').get('userInformation').get('id');
      // socket.emit('message', { companyId, userId });
    },
    (err) => {
      console.log(err);
    }, dispatch)
);
