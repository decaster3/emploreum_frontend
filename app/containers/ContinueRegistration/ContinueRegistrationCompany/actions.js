/*
 *
 * RegistrationEmployee actions
 *
 */
import {
  GET_EMPLOYEE_REGISTRATION_STEP,
  LOADED,
  CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS,
} from './constants';
// imitation server
import {
  submitCompanySpecificationsSkillsAPI,
 } from '../../../services/api/Register';

import { updateRegistrationStep, skipRegistrationStep } from '../../UserSession/actions';

export const changeSubmitSpecificationButtonState = () => ({ type: CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS });


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

export const nextStep = () => (
  (dispatch) => {
    dispatch(skipRegistrationStep(getRegistrationStep));
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
