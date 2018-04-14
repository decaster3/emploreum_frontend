/*
 *
 * RegistrationEmployee actions
 *
 */
import { SubmissionError } from 'redux-form/immutable';
import { push } from 'react-router-redux';
import {
  UP_REGISTRATION_STEP,
  CHANGE_ADD_LOGIN_BUTTON_STATE,
  DOWN_REGISTRATION_STEP,
  CHANGE_SUBMIT_EMAIL_BUTTON_STATE,
  CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE,
  CLEAR_REGISTRATION,
} from './constants';

import { registerAPI, sendVerificationCodeAPI, addLoginAPI } from '../../services/api/Register';
import { loginAfterRegistration } from '../UserSession/actions';

export const login = (dispatch, data) => {
  dispatch(loginAfterRegistration(data));
  dispatch(push('/user'));
};

const changeSubmitEmailButtonState = () => ({ type: CHANGE_SUBMIT_EMAIL_BUTTON_STATE });
const changeSubmitEmailVerificationButtonState = () => ({ type: CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE });
const changeAddLoginButtonState = () => ({ type: CHANGE_ADD_LOGIN_BUTTON_STATE });
const upRegistrationStep = () => ({ type: UP_REGISTRATION_STEP });

export const downRegistrationStep = () => ({ type: DOWN_REGISTRATION_STEP });
export const clearReducer = () => ({ type: CLEAR_REGISTRATION });

// export const changeButtonStateAfterClose = () => (
//   (dispatch, getState) => {
//     const current
//   }
// );
export const submitEmail = (values) => (
  (dispatch) => {
    dispatch(changeSubmitEmailButtonState());
    const { email } = values.toJS();
    return registerAPI({ email },
      () => {
        dispatch(upRegistrationStep());
        dispatch(changeSubmitEmailButtonState());
      },
      (err) => {
        dispatch(changeSubmitEmailButtonState());
        if (err.response.data) {
          throw new SubmissionError({ _error: err.response.data });
        }
      }, dispatch);
  }
);

export const submitEmailVerification = (values) => (
  (dispatch) => {
    dispatch(changeSubmitEmailVerificationButtonState());
    const { code } = values.toJS();
    return sendVerificationCodeAPI({ verifyCode: code },
      (data) => {
        dispatch(changeSubmitEmailVerificationButtonState());
        console.log(data);
        if (data.isNewUser) {
          dispatch(upRegistrationStep());
        } else {
          dispatch(login(dispatch, data));
        }
      },
      (err) => {
        if (err.r) {
          throw new SubmissionError({ _error: 'Wrong code!' });
        }
        dispatch(changeSubmitEmailVerificationButtonState());
      }, dispatch);
  }
);

export const addLogin = (values) => (
  (dispatch) => {
    dispatch(changeSubmitEmailVerificationButtonState());
    const newLogin = values.toJS().login;
    return addLoginAPI({ login: newLogin },
      (data) => {
        dispatch(changeAddLoginButtonState());
        dispatch(login(dispatch, data));
      },
      (err) => {
        if (err.r) {
          throw new SubmissionError({ _error: 'Login is not avialable!' });
        }
        dispatch(changeAddLoginButtonState());
      }, dispatch);
  }
);
