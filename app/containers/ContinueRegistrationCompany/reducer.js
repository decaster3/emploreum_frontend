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
  NOT_LOADED,
  NOT_CHOOSEN,
  DELETE_SPECIFICATION_FROM_POSSIBLE,
  ADD_SPECIFICATION_TO_POSSIBLE,
  DELETE_SPECIFICATION_FROM_CHOOSEN,
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

    case CHOOSE_EMPLOYEE_SPECIFICATION_LIST:
      return state
        .set('choosenSpecifications', fromJS({
          choosenSpecificationStatus: state.get('choosenSpecifications').get('choosenSpecificationStatus'),
          items: [...state.get('choosenSpecifications').get('items'), { specification: action.payload.item }],
        }));

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
