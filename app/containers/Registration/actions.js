/*
 *
 * RegistrationEmployee actions
 *
 */
import { SubmissionError } from 'redux-form/immutable';
import { push } from 'react-router-redux';
import {
  UP_REGISTRATION_STEP,
  CHANGE_ROLE,
  DOWN_REGISTRATION_STEP,
  CHANGE_SUBMIT_EMAIL_BUTTON_STATE,
  CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE,
  CLEAR,
} from './constants';

import { registerAPI, sendVerificationCodeAPI } from '../../services/api/Register';
import { loginAfterRegistration } from '../UserSession/actions';

export const redirect = (role, dispatch) => {
  if (role === 'COMPANY') {
    dispatch(push('/company'));
  } else {
    dispatch(push('/employee'));
  }
};
export const clearReducer = () => ({ type: CLEAR });

export const changeRole = (role) => ({ type: CHANGE_ROLE, payload: role });

export const changeSubmitEmailButtonState = () => ({ type: CHANGE_SUBMIT_EMAIL_BUTTON_STATE });
export const changeSubmitEmailVerificationButtonState = () => ({ type: CHANGE_SUBMIT_EMAIL_VERIFICATION_BUTTON_STATE });

export const upRegistrationStep = () => ({ type: UP_REGISTRATION_STEP });
export const downRegistrationStep = () => ({ type: DOWN_REGISTRATION_STEP });

export const submitEmail = (values) => (
  (dispatch, getState) => {
    dispatch(changeSubmitEmailButtonState());
    const { email, password, passwordConfirmation } = values.toJS();
    const role = getState().get('registration').get('role');
    return registerAPI({ email, password, passwordConfirmation, role },
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
  (dispatch, getState) => {
    dispatch(changeSubmitEmailVerificationButtonState());
    const { code } = values.toJS();
    const verifyCode = code;
    return sendVerificationCodeAPI({ verifyCode },
      (data) => {
        dispatch(loginAfterRegistration(data));
        dispatch(changeSubmitEmailVerificationButtonState());
        dispatch(redirect(getState().get('userSession')
        .get('userAuth').get('userInformation').get('role'), dispatch));
      },
      (err) => {
        if (err.r) {
          throw new SubmissionError({ _error: 'Wrong code!' });
        }
        dispatch(changeSubmitEmailVerificationButtonState());
      }, dispatch);
  }
);
