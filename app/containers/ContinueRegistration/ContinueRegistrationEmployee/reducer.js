/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_EMPLOYEE_REGISTRATION_STEP,
  NOT_LOADED,
  NOT_CHOOSEN,
  CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS,
  CHANGE_SUBMIT_ABOUT_BUTTON_STATUS,
} from './constants';

const initialState = fromJS({
  registrationStep: {
    registrationStepStatus: NOT_LOADED,
    step: 0,
  },
  specificationList: {
    specificationListStatus: NOT_LOADED,
    list: [],
  },
  choosenSpecifications: {
    choosenSpecificationStatus: NOT_CHOOSEN,
    items: [],
  },
  submittingSpecification: false,
  submittingAbout: false,
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_SPECIFICATION_BUTTON_STATUS:
      return state
        .set('submittingSpecification', !state.get('submittingSpecification'));
    case CHANGE_SUBMIT_ABOUT_BUTTON_STATUS:
      return state
        .set('submittingAbout', !state.get('submittingAbout'));
    case GET_EMPLOYEE_REGISTRATION_STEP:
      return state
        .set('registrationStep', fromJS(action.payload));
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
