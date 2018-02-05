/*
 *
 * User actions
 *
 */
import { push } from 'react-router-redux';
import {
  LOGGING_IN,
  LOGED_IN,
  CHANGE_USER_STATE,
  ANONYMOUS,
  UPDATE_REGISTRATION_STEP,
} from './constants';

import { loginAPI } from '../../services/api/register';
export const login = (values) => (
  (dispatch) => {
    const { email, password } = values.toJS();
    dispatch({
      type: CHANGE_USER_STATE,
      payload: {
        userState: LOGGING_IN,
        userInformation: {},
      },
    });
    loginAPI({ email, password }, (data) => {
      dispatch({
        type: CHANGE_USER_STATE,
        payload: {
          userState: LOGED_IN,
          userInformation: {
            registrationStep: data.registrationStep,
            role: data.role,
          },
        },
      });
      dispatch(push('/'));
    }, (err) => {
      console.log(err.response.data);
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

export const sererLogout = () => (
  (dispatch) => {
    dispatch({
      type: CHANGE_USER_STATE,
      payload: {
        userState: ANONYMOUS,
        userInformation: {},
      },
    });
  }
);
