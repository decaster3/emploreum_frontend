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
  NEXT_REGISTRATION_STEP,
  SKIP_LAST_STEP,
} from './constants';

import { loginAPI, logoutAPI, skipRegistrationStepAPI } from '../../services/api/Register';
const nextRegistrationStep = () => ({ type: NEXT_REGISTRATION_STEP });
export const skipLastStep = () => ({ type: SKIP_LAST_STEP });
export const skipRegistrationStep = (getRegistrationStep) => (
  (dispatch) => skipRegistrationStepAPI(() => {
    dispatch(nextRegistrationStep());
    dispatch(getRegistrationStep());
  }, (err) => {
    console.log(err);
  }, dispatch)
);

export const redirect = (role, dispatch) => {
  if (role === 'COMPANY') {
    dispatch(push('/company'));
  } else {
    dispatch(push('/employee'));
  }
};

export const changeUserStateFromLoggingAferClose = () => (
  (dispatch, getState) => {
    const currentUserState = getState().get('userSession').get('userAuth').get('userState');
    if (currentUserState === LOGGING_IN) {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: ANONYMOUS,
          userInformation: {},
        },
      });
    }
  }
);

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
            name: data.name,
            photoPath: data.photoPath,
          },
        },
      });
      dispatch(redirect(getState().get('userSession')
        .get('userAuth').get('userInformation').get('role'), dispatch));
    }, (err) => {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: ANONYMOUS,
          userInformation: {},
        },
      });
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
          name: data.name,
          photoPath: data.photoPath,
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

export const completeRegistration = (photoPath) => (
  (dispatch) => {
    dispatch({
      type: COMPLETE_REGISTRATION,
      payload: photoPath,
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
