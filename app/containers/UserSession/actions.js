/*
 *
 * User actions
 *
 */
import { SubmissionError } from 'redux-form/immutable';
import { push } from 'react-router-redux';
import {
  LOGGING_IN,
  LOGED_IN,
  CHANGE_USER_STATE,
  ANONYMOUS,
  UPDATE_REGISTRATION_STEP,
  COMPLETE_REGISTRATION,
} from './constants';

import { loginAPI, logoutAPI } from '../../services/api/Register';

export const redirect = (role, dispatch) => {
  if (role === 'COMPANY') {
    dispatch(push('/company'));
  } else {
    dispatch(push('/employee'));
  }
};

export const login = (values) => (
  (dispatch, getState) => {
    const { email, password } = values.toJS();
    dispatch({
      type: CHANGE_USER_STATE,
      payload: {
        userState: LOGGING_IN,
        userInformation: {},
      },
    });
    return loginAPI({ email, password }, (data) => {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: LOGED_IN,
          userInformation: {
            registrationStep: data.registrationStep,
            role: data.role,
            id: data.userId,
          },
        },
      });
      dispatch(redirect(getState().get('userSession')
        .get('userAuth').get('userInformation').get('role'), dispatch));
    }, (err) => {
      dispatch(serverLogout());
      if (err.response.status && err.response.status === 401) {
        throw new SubmissionError({ _error: 'Wrong email address or password!' });
      }
    }, dispatch);
  }
);

export const loginAfterRegistration = (data) => (
  (dispatch) => {
    dispatch({
      type: CHANGE_USER_STATE,
      payload: {
        userState: LOGED_IN,
        userInformation: {
          registrationStep: data.registrationStep,
          role: data.role,
          id: data.userId,
        },
      },
    });
  }
);

export const updateRegistrationStep = (step) => (
  (dispatch) => {
    dispatch({
      type: UPDATE_REGISTRATION_STEP,
      payload: step,
    });
  }
);

export const completeRegistration = () => (
  (dispatch) => {
    dispatch({
      type: COMPLETE_REGISTRATION,
    });
  }
);

export const serverLogout = () => (
  (dispatch) => {
    logoutAPI(() => {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: ANONYMOUS,
          userInformation: {},
        },
      });
      dispatch(push('/'));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
