/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  UP_REGISTRATION_STEP,
  CHANGE_ROLE,
  DOWN_REGISTRATION_STEP,
} from './constants';
// imitation server
import { registerAPI, sendVerificationCodeAPI } from '../../services/api/register';
import { loginAfterRegistration } from '../UserSession/actions';
export const changeRole = (role) => ({
  type: CHANGE_ROLE,
  payload: role,
});

export const upRegistrationStep = () => ({ type: UP_REGISTRATION_STEP });
export const downRegistrationStep = () => ({ type: DOWN_REGISTRATION_STEP });

export function sendCodeToEmail() {
  console.log('email was sent');
}
// export const registerAPI = (credentails, successCallBack, errorCallBack, dispatch)

export const submitEmail = (values) => (
  (dispatch, getState) => {
    const { email, password, passwordConfirmation } = values.toJS();
    const role = getState().get('registration').get('role');
    registerAPI({ email, password, passwordConfirmation, role },
      () => {
        dispatch(upRegistrationStep());
      },
      (err) => {
        console.log(err);
      }, dispatch);
  }
);

export const submitEmailVerification = (values) => (
  (dispatch) => {
    const { code } = values.toJS();
    const verifyCode = code;
    sendVerificationCodeAPI({ verifyCode },
      (data) => {
        dispatch(loginAfterRegistration(data));
        dispatch(push('/'));
      },
      (err) => {
        console.log(err);
      }, dispatch);
  }
);
