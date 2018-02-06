/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';

import {
  UP_REGISTRATION_STEP,
  DOWN_REGISTRATION_STEP,
  GET_EMPLOYEE_REGISTRATION_STEP,
  LOADING,
  GET_EMPLOYEE_SKILLS_LIST,
  GET_EMPLOYEE_SPECIFICATION_LIST,
  LOADED,
  CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
  CHOOSEN,
  ADD_SKILL_TO_SPECIFICATION,
  DELETE_SPECIFICATION_FROM_POSSIBLE,
  ADD_SPECIFICATION_TO_POSSIBLE,
  DELETE_SKILL_FROM_POSSIBLE,
  ADD_SKILL_TO_POSSIBLE,
  DELETE_SPECIFICATION_FROM_CHOOSEN,
  DELETE_SKILL_FROM_SPECIFICATION,
} from './constants';
// imitation server
import {
  submitEmployeeSpecificationsSkillsAPI,
  submitEmployeeAboutAPI,
  getSpecificationsAPI,
  getSkillsFromSpecificationAPI,
} from '../../services/api/register';

import { updateRegistrationStep, completeRegistration } from '../UserSession/actions';
import { log } from 'util';

export const getRegistrationStep = () => (
  (dispatch, getState) => {
    // get registation step from Back
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: getState().get('userSession').get('userAuth').get('userInformation').get('registrationStep'),
      },
    });
  }
);

export const upRegistrationStep = () => ({ type: UP_REGISTRATION_STEP });
export const downRegistrationStep = () => ({ type: DOWN_REGISTRATION_STEP });


export const submitSpecificationSkillsStep = () => (
  (dispatch, getState) => {
    const arrOfChoosenSpecifications = getState().get('continueRegistrationEmployee')
      .get('choosenSpecifications').get('items');
    submitEmployeeSpecificationsSkillsAPI(arrOfChoosenSpecifications, (data) => {
      console.log(data);
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
    submitEmployeeAboutAPI({ name, about }, () => {
      dispatch(completeRegistration());
    }, (err) => {
      console.log(err);
    }, dispatch).then(() => {
      dispatch(push('employee/finance'));
    });
  }
);

export const getSpecification = () => (
  (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_SPECIFICATION_LIST,
      payload: {
        specificationListStatus: LOADING,
        list: {},
      },
    });
    getSpecificationsAPI((specList) => {
      dispatch({
        type: GET_EMPLOYEE_SPECIFICATION_LIST,
        payload: {
          specificationListStatus: LOADED,
          list: specList.profiles,
        },
      });
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const chooseSpecification = (specification) => (
  (dispatch) => {
    dispatch({
      type: CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
      payload: {
        choosenSpecificationListStatus: CHOOSEN,
        item: specification,
      },
    });
  }
);
export const deleteSpecificationFromPossible = (specification) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SPECIFICATION_FROM_POSSIBLE,
      payload: specification,
    });
  }
);
export const deleteSkillFromPossible = (specification, skill) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SKILL_FROM_POSSIBLE,
      payload: {
        specification,
        skill,
      },
    });
  }
);
export const addSpecificationToPossible = (specification) => (
  (dispatch) => {
    dispatch({
      type: ADD_SPECIFICATION_TO_POSSIBLE,
      payload: specification,
    });
  }
);

export const deleteSpecificationFromChoosen = (specification) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SPECIFICATION_FROM_CHOOSEN,
      payload: specification,
    });
    dispatch(addSpecificationToPossible(specification));
  }
);

export const addSkill = (specification, skill) => (
  (dispatch) => {
    dispatch({
      type: ADD_SKILL_TO_SPECIFICATION,
      payload: {
        specification,
        skill,
      },
    });
    dispatch(deleteSkillFromPossible(specification, skill));
  }
);

export const addSkillToPossible = (specification, skill) => (
  (dispatch) => {
    dispatch({
      type: ADD_SKILL_TO_POSSIBLE,
      payload: {
        specification,
        skill,
      },
    });
  }
);

export const deleteSkillFromSpecification = (specification, skill) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SKILL_FROM_SPECIFICATION,
      payload: {
        specification,
        skill,
      },
    });
    dispatch(addSkillToPossible(specification, skill));
  }
);

export const getSkills = (specification) => (
  (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_SKILLS_LIST,
      payload: {
        possibleSkillsStatus: LOADING,
        specification,
        possibleSkills: [],
      },
    });
    getSkillsFromSpecificationAPI(specification, (response) => {
      dispatch({
        type: GET_EMPLOYEE_SKILLS_LIST,
        payload: {
          possibleSkillsStatus: LOADED,
          specification,
          possibleSkills: response.skills,
        },
      });
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const addSpecificationWithSkills = (specification) => (
  (dispatch) => {
    dispatch(chooseSpecification(specification));
    dispatch(getSkills(specification));
    dispatch(deleteSpecificationFromPossible(specification));
  }
);
