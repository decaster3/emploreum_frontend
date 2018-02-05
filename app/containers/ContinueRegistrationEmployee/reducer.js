/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UP_REGISTRATION_STEP,
  DOWN_REGISTRATION_STEP,
  CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
  GET_EMPLOYEE_REGISTRATION_STEP,
  GET_EMPLOYEE_SPECIFICATION_LIST,
  GET_EMPLOYEE_SKILLS_LIST,
  NOT_LOADED,
  NOT_CHOOSEN,
  ADD_SKILL_TO_SPECIFICATION,
  DELETE_SPECIFICATION_FROM_POSSIBLE,
  ADD_SPECIFICATION_TO_POSSIBLE,
  DELETE_SKILL_FROM_POSSIBLE,
  ADD_SKILL_TO_POSSIBLE,
  DELETE_SPECIFICATION_FROM_CHOOSEN,
  DELETE_SKILL_FROM_SPECIFICATION,
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
});

function registrationEmployeeReducer(state = initialState, action) {
  switch (action.type) {

    case UP_REGISTRATION_STEP: {
      const step = state.get('registrationStep');
      return state.set('registrationStep', fromJS({
        registrationStepStatus: step.get('registrationStepStatus'),
        step: step.get('step') + 1,
      }));
    }

    case DOWN_REGISTRATION_STEP: {
      const step = state.get('registrationStep');
      return state.set('registrationStep', fromJS({
        registrationStepStatus: step.get('registrationStepStatus'),
        step: step.get('step') - 1,
      }));
    }

    case GET_EMPLOYEE_REGISTRATION_STEP:
      return state
        .set('registrationStep', fromJS(action.payload));

    case GET_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('specificationList', fromJS(action.payload));

    case GET_EMPLOYEE_SKILLS_LIST: {
      const specifications = state.get('choosenSpecifications').get('items').toJS();
      const currentSpecificationIndexx = specifications.findIndex((x) =>
          x.specification === action.payload.specification);
      const currentSpecificationn = specifications[currentSpecificationIndexx];
      currentSpecificationn.possibleSkills = action.payload.possibleSkills;
      currentSpecificationn.possibleSkillsStatus = action.payload.possibleSkillsStatus;
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: state.get('choosenSpecifications').get('choosenSpecificationStatus'),
          items: Object.assign([], specifications, { currentSpecificationIndexx: currentSpecificationn }),
        }));
    }
    case CHOOSE_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: state.get('choosenSpecifications').get('choosenSpecificationStatus'),
          items: [...state.get('choosenSpecifications').get('items'), { specification: action.payload.item }],
        }));

    case ADD_SKILL_TO_SPECIFICATION: {
      const items = state.get('choosenSpecifications').get('items').toJS();
      const currentSpecificationIndex = items.findIndex((x) =>
          x.specification === action.payload.specification);
      const currentSpecification = items[currentSpecificationIndex];
      currentSpecification.items = currentSpecification.items
        ? [...currentSpecification.items, action.payload.skill]
        : [...[action.payload.skill]];
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: state.get('choosenSpecifications').get('choosenSpecificationStatus'),
          items: Object.assign([], items, { currentSpecificationIndex: currentSpecification }),
        }));
    }
    case DELETE_SKILL_FROM_SPECIFICATION: {
      const choosenSpecifications = state.get('choosenSpecifications').toJS();
      const currentSpecificationIndex = choosenSpecifications.items.findIndex((x) =>
          x.specification === action.payload.specification);
      const currentSpecification = choosenSpecifications.items[currentSpecificationIndex];
      const skillForDeliteIndex = currentSpecification.items.indexOf(action.payload.skill);
      currentSpecification.items.splice(skillForDeliteIndex, 1);
      return state.set('choosenSpecifications', fromJS(choosenSpecifications));
    }
    case DELETE_SPECIFICATION_FROM_POSSIBLE: {
      const oldList = state.get('specificationList').get('list').toJS();
      const index = oldList.indexOf(action.payload);
      oldList.splice(index, 1);
      return state
        .set('specificationList', fromJS({
          specificationListStatus: state.get('specificationList').get('specificationListStatus'),
          list: oldList,
        }));
    }
    case ADD_SPECIFICATION_TO_POSSIBLE: {
      const oldList = state.get('specificationList').get('list').toJS();
      return state
        .set('specificationList', fromJS({
          specificationListStatus: state.get('specificationList').get('specificationListStatus'),
          list: [...oldList, action.payload],
        }));
    }
    case DELETE_SKILL_FROM_POSSIBLE: {
      const getChoosenSpecifications = state.get('choosenSpecifications').toJS();
      const oldList = getChoosenSpecifications.items.find((obj) =>
        obj.specification === action.payload.specification).possibleSkills;
      const index = oldList.indexOf(action.payload.skill);
      oldList.splice(index, 1);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    case ADD_SKILL_TO_POSSIBLE: {
      const getChoosenSpecifications = state.get('choosenSpecifications').toJS();
      const oldList = getChoosenSpecifications.items.find((obj) =>
        obj.specification === action.payload.specification).possibleSkills;
      oldList.push(action.payload.skill);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    case DELETE_SPECIFICATION_FROM_CHOOSEN: {
      const getChoosenSpecifications = state.get('choosenSpecifications').toJS();
      const oldList = getChoosenSpecifications.items.find((obj) =>
        obj.specification === action.payload);
      const index = getChoosenSpecifications.items.indexOf(oldList);
      getChoosenSpecifications.items.splice(index, 1);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
