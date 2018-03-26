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
import {
  submitEmployeeSpecificationsSkillsAPI,
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
    dispatch(changeSubmitSpecificationButtonState());
    const arrOfChoosenSpecifications = getState().get('specificationsSkills')
      .get('choosenSpecifications').get('items');
    submitEmployeeSpecificationsSkillsAPI(arrOfChoosenSpecifications, (data) => {
      dispatch(changeSubmitSpecificationButtonState());
      dispatch(updateRegistrationStep(data.registrationStep));
    }, (err) => {
      dispatch(changeSubmitSpecificationButtonState());
      console.log(err);
    }, dispatch).then(() => {
      dispatch(getRegistrationStep());
    });
  }
);
