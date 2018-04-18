/*
 *
 * RegistrationEmployee actions
 *
 */
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import {
  CHANGE_SUBMIT_ABOUT_BUTTON_STATUS,
  CHOOSE_AVATAR,
} from './constants';
import {
  submitCompanyAboutAPI,
  submitAvatarAPI,
 } from '../../../services/api/Register';

import { completeRegistration } from './../../UserSession/actions';

export const changeSubmitAboutButtonState = () => ({ type: CHANGE_SUBMIT_ABOUT_BUTTON_STATUS });
export const chooseAvatar = (avatar) => ({ type: CHOOSE_AVATAR, payload: avatar });

const redirect = (role, dispatch) => {
  if (role === 'COMPANY') {
    dispatch(push('/company'));
  } else {
    dispatch(push('/employee'));
  }
};

export const submitAboutStep = (values) => (
  (dispatch, getState) => {
    const { name, about } = values.toJS();
    const avatarFile = getState().get('continueRegistrationAbout').get('choosenAvatar');
    const choosenLanguages = getState().get('languageSelectorCompanyRegistration').get('choosenLanguages').toJS();
    let logo = '';
    dispatch(changeSubmitAboutButtonState());
    submitAvatarAPI(avatarFile, (data) => {
      logo = data;
    }, (err) => {
      console.log(err);
    }).then(() => {
      submitCompanyAboutAPI({ name, about, logo, choosenLanguages }, () => {
        dispatch(changeSubmitAboutButtonState());
        dispatch(completeRegistration(logo));
      }, (err) => {
        if (err) {
          dispatch(changeSubmitAboutButtonState());
          throw new SubmissionError({ _error: 'Incorrect data format!' });
        }
      }, dispatch);
    }).then(() => {
      redirect(getState().get('userSession')
      .get('userAuth').get('userInformation').get('role'), dispatch);
    });
  }
);
