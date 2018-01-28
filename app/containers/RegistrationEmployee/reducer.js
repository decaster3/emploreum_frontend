/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
  GET_EMPLOYEE_REGISTRATION_STEP,
  GET_EMPLOYEE_SPECIFICATION_LIST,
  GET_EMPLOYEE_SKILLS_LIST,
  NOT_LOADED,
  NOT_CHOOSEN,
  ADD_SKILL_TO_SPECIFICATION,
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
  skillsList: {
    skillsListStatus: NOT_LOADED,
    list: [],
  },
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {

    case GET_EMPLOYEE_REGISTRATION_STEP:
      return state
        .set('registrationStep', fromJS(action.payload));

    case GET_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('specificationList', fromJS(action.payload));

    case GET_EMPLOYEE_SKILLS_LIST:
      return state
          .set('skillsList', fromJS(action.payload));

    case CHOOSE_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: action.payload.choosenSpecificationListStatus,
          items: [...state.get('choosenSpecifications').get('items'), { specification: action.payload.item }],
        }));

    case ADD_SKILL_TO_SPECIFICATION:
      const items = state.get('choosenSpecifications').get('items').toJS();
      console.log(items);
      const currentSpecificationIndex = items.findIndex((x) =>
          x.specification === action.payload.specification);
      const currentSpecification = items[currentSpecificationIndex];
      console.log(currentSpecification.items);
      currentSpecification.items = currentSpecification.items
        ? [...currentSpecification.items, action.payload.skill]
        : [...[action.payload.skill]];
      console.log(currentSpecification.items);
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: state.get('choosenSpecifications').get('choosenSpecificationStatus'),
          items: Object.assign([], items, { currentSpecificationIndex: currentSpecification }),
        }));
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
