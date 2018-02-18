/*
 *
 * VacanciesSearch actions
 *
 */


// import socket from '../../../services/socket';
import { enrollVacancyAPI } from '../../services/api/VacanciesSearch';

export const enrollVacancy = (id) => (
  (dispatch) =>
    enrollVacancyAPI({ id }, () => {
      console.log('vacany submited');
    },
    (err) => {
      console.log(err);
    }, dispatch)
);
