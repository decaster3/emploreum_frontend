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
  DELETE_SPECIFICATION_FROM_POSSIBLE,
  ADD_SPECIFICATION_TO_POSSIBLE,
  DELETE_SKILL_FROM_POSSIBLE,
  ADD_SKILL_TO_POSSIBLE,
  DELETE_SPECIFICATION_FROM_CHOOSEN,
  DELETE_SKILL_FROM_SPECIFICATION,
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

    case GET_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('specificationList', fromJS(action.payload));

    case GET_EMPLOYEE_SKILLS_LIST: {
      const specifications = state.get('choosenSpecifications').get('items').toJS();
      const currentSpecificationIndexx = specifications.findIndex((x) =>
          x.specification.name === action.payload.specification.name);
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
          x.specification.name === action.payload.specification.name);
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
          x.specification.name === action.payload.specification.name);
      const currentSpecification = choosenSpecifications.items[currentSpecificationIndex];
      // const skillForDeliteIndex = currentSpecification.items.indexOf(action.payload.skill);
      const pos = currentSpecification.items.findIndex((i) => i.name === action.payload.skill.name);
      currentSpecification.items.splice(pos, 1);
      return state.set('choosenSpecifications', fromJS(choosenSpecifications));
    }
    case DELETE_SPECIFICATION_FROM_POSSIBLE: {
      const oldList = state.get('specificationList').get('list').toJS();
      const pos = oldList.findIndex((i) => i.name === action.payload.name);
      oldList.splice(pos, 1);
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
        obj.specification.name === action.payload.specification.name).possibleSkills;
      const pos = oldList.findIndex((i) => i.name === action.payload.skill.name);
      oldList.splice(pos, 1);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    case ADD_SKILL_TO_POSSIBLE: {
      const getChoosenSpecifications = state.get('choosenSpecifications').toJS();
      const oldList = getChoosenSpecifications.items.find((obj) =>
        obj.specification.name === action.payload.specification.name).possibleSkills;
      oldList.push(action.payload.skill);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    case DELETE_SPECIFICATION_FROM_CHOOSEN: {
      const getChoosenSpecifications = state.get('choosenSpecifications').toJS();
      const oldList = getChoosenSpecifications.items.find((obj) =>
        obj.specification.name === action.payload.name);
      // const pos = oldList.findIndex((i) => i.name === action.payload.name);
      const index = getChoosenSpecifications.items.indexOf(oldList);
      getChoosenSpecifications.items.splice(index, 1);
      return state.set('choosenSpecifications', fromJS(getChoosenSpecifications));
    }
    default:
      return state;
  }
}

export default registrationEmployeeReducer;
