/*
 *
 * VacanciesSearch actions
 *
 */


// import socket from '../../../services/socket';
import { toast } from 'react-toastify';
import { enrollVacancyAPI, checkEnrollAvailabilityAPI } from './../../../services/api/VacanciesSearch';
import {
  CHANGE_BUTTON_STATE,
  AVAILABLE,
  SUBMITTED,
  LOADING,
  TEST_FAILED,
  CONTINUE_TEST,
  START_TEST,
  ERROR_LOADING,
  RESET_ENROLL_BUTTON_VACANCY,
} from './constants';

const notifySuccess = () => toast('Vacancy succesfully added to your awaited list!', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
const notifyError = () => toast('Something went wrong! Please try again.', { hideProgressBar: true, autoClose: 3000, type: toast.TYPE.INFO });
export const onCloseEnrollButton = () => ({ type: RESET_ENROLL_BUTTON_VACANCY });


const changeButtonStateLoading = () => ({ type: CHANGE_BUTTON_STATE, payload: LOADING });
const changeButtonStateAvailable = () => ({ type: CHANGE_BUTTON_STATE, payload: AVAILABLE });
const changeButtonStateStartTest = () => ({ type: CHANGE_BUTTON_STATE, payload: START_TEST });
const changeButtonStateSubmited = () => ({ type: CHANGE_BUTTON_STATE, payload: SUBMITTED });
const changeButtonStateTestFailed = () => ({ type: CHANGE_BUTTON_STATE, payload: TEST_FAILED });
const changeButtonStateContinueTest = () => ({ type: CHANGE_BUTTON_STATE, payload: CONTINUE_TEST });
const changeButtonStateErrorLoading = () => ({ type: CHANGE_BUTTON_STATE, payload: ERROR_LOADING });


export const enrollVacancy = (id) => (
  (dispatch) => {
    dispatch(changeButtonStateLoading());
    enrollVacancyAPI({ id }, () => {
      notifySuccess();
      dispatch(changeButtonStateSubmited());
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
    checkEnrollAvailabilityAPI(id, (type) => {
      switch (type) {
        case 'available':
          dispatch(changeButtonStateAvailable());
          break;
        case 'submitted':
          dispatch(changeButtonStateSubmited());
          break;
        case 'continue':
          dispatch(changeButtonStateContinueTest());
          break;
        case 'failed':
          dispatch(changeButtonStateTestFailed());
          break;
        case 'start':
          dispatch(changeButtonStateStartTest());
          break;
        default:
          dispatch(changeButtonStateErrorLoading());
      }
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
