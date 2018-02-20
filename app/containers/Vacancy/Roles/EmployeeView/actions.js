/*
 *
 * VacanciesSearch actions
 *
 */


// import socket from '../../../services/socket';
import { toast } from 'react-toastify';
import { enrollVacancyAPI, checkEnrollAvailabilityAPI } from '../../../../services/api/VacanciesSearch';
import {
  CHANGE_BUTTON_STATE,
  AVAILABLE,
  NOT_AVAILABLE,
  LOADING,
} from './constants';

const notifySuccess = () => toast('Vacancy succesfully added to your awaited list!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
const notifyError = () => toast('Something went wrong! Please try again.', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
const changeButtonStateLoading = () => ({ type: CHANGE_BUTTON_STATE, payload: LOADING });
const changeButtonStateAvailable = () => ({ type: CHANGE_BUTTON_STATE, payload: AVAILABLE });
const changeButtonStateNotAvailable = () => ({ type: CHANGE_BUTTON_STATE, payload: NOT_AVAILABLE });


export const enrollVacancy = (id) => (
  (dispatch) => {
    dispatch(changeButtonStateLoading());
    enrollVacancyAPI({ id }, () => {
      notifySuccess();
      dispatch(changeButtonStateNotAvailable());
    },
    (err) => {
      console.log(err);
      notifyError();
      dispatch(changeButtonStateAvailable());
    }, dispatch);
  }
);

export const getEnrollButtonState = (id) => (
  (dispatch) => {
    checkEnrollAvailabilityAPI(id, () => {
      dispatch(changeButtonStateAvailable());
    }, (err) => {
      dispatch(changeButtonStateNotAvailable());
      console.log(err);
    }, dispatch);
  }
);
