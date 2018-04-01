/*
 *
 * CompanyFinanceContainer actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  CHANGE_STATE_OPEN_VACANCIES,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES,
} from './constants';
import { getOpenVacanciesAPI } from '../../../../services/api/Vacancy';


export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADED });

export const getOpenVacancies = (companyId) => (
  (dispatch, getState) => {
    if (getState().get('companyFinanceOpenVacancies').get('openVacancies').get('status') !== LOADED) {
      dispatch(showLoading());
    }
    return getOpenVacanciesAPI(companyId, (data) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_OPEN_VACANCIES,
        payload: data,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      dispatch(hideLoading());
      console.log(err);
    }, dispatch);
  }
);

// export const getOpenVacancies = (companyId) => (
//   (dispatch) => {
//     dispatch({
//       type: GET_OPEN_VACANCIES,
//       payload: getOpenVacanciesAPI(companyId).then((data) => {
//         dispatch(hideLoading());
//         dispatch(loadedOpenVacancies());
//         return data;
//       }).catch((err) => {
//         console.log(err);
//       }),
//     });
//   }
// );

