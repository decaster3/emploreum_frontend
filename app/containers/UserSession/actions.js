/*
 *
 * User actions
 *
 */

import {
  LOGGING_IN,
  LOGED_IN,
  CHANGE_USER_STATE,
  ANONYMOUS,
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
            name: data.name,
            role: data.role,
          },
        },
      });
    }, (err) => {
      console.log(err.response.data);
    }, dispatch);
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
