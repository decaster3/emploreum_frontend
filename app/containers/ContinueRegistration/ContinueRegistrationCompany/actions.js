/*
 *
 * RegistrationEmployee actions
 *
 */
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import {
  GET_EMPLOYEE_REGISTRATION_STEP,
  LOADED,
  CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS,
  CHANGE_SUBMIT_ABOUT_BUTTON_STATUS,
} from './constants';
// imitation server
import {
  submitCompanySpecificationsSkillsAPI,
  submitCompanyAboutAPI,
 } from '../../../services/api/Register';

import { updateRegistrationStep, completeRegistration } from '../../UserSession/actions';

export const changeSubmitSpecificationButtonState = () => ({ type: CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS });
export const changeSubmitAboutButtonState = () => ({ type: CHANGE_SUBMIT_ABOUT_BUTTON_STATUS });


export const getRegistrationStep = () => (
  (dispatch, getState) => {
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: getState().get('userSession').get('userAuth').get('userInformation').get('registrationStep'),
      },
    });
  }
);

export const submitSpecificationSkillsStep = () => (
  (dispatch, getState) => {
    const specs = getState().get('specificationSkillsCompanyRegistration')
      .get('choosenSpecifications').get('items');
    submitCompanySpecificationsSkillsAPI(specs, (data) => {
      dispatch(updateRegistrationStep(data.registrationStep));
    }, (err) => {
      console.log(err);
    }, dispatch).then(() => {
      dispatch(getRegistrationStep());
    });
  }
);

export const submitAboutStep = (values) => (
  (dispatch) => {
    const { name, about } = values.toJS();
    submitCompanyAboutAPI({ name, about }, () => {
      dispatch(completeRegistration());
    }, (err) => {
      if (err) {
        throw new SubmissionError({ _error: 'Incorrect data format!' });
      }
    }, dispatch).then(() => {
      dispatch(push('company/finance'));
    });
  }
);
