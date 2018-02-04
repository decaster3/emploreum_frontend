/*
 *
 * RegistrationEmployee actions
 *
 */
import {
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
  CHANGE_ROLE,
} from './constants';
// imitation server
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function changeRole(role) {
  return ({
    type: CHANGE_ROLE,
    payload: role,
  });
}

export const getRegistrationStep = () => (
  (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADING,
        step: 0,
      },
    });
    // get registation step from Back
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: 1,
      },
    });
  }
);

export function sendCodeToEmail() {
  console.log('email was sent');
}

export const submitSecondStep = (values) => (
  (dispatch) => {
    console.log(values);
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: 3,
      },
    });
  }
);

export const submitThirdStep = () => (
  (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: 4,
      },
    });
  }
);

export const submitFourthStep = (name, about) => (
  (dispatch) => {
    console.log(name);
    console.log(about);
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: 4,
      },
    });
  }
);

export const submitFirstStep = (values) => (
  (dispatch) => {
    console.log(values);
    sleep(1000).then(() => {
      sendCodeToEmail();
    });
    dispatch({
      type: GET_EMPLOYEE_REGISTRATION_STEP,
      payload: {
        registrationStepStatus: LOADED,
        step: 2,
      },
    });
  }
);

const testSpecList = ['Web', 'Bigdata', 'Desctop'];
export const getSpecification = () => (
  (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_SPECIFICATION_LIST,
      payload: {
        specificationListStatus: LOADING,
        list: {},
      },
    });
    return sleep(1000).then(() => {
      dispatch({
        type: GET_EMPLOYEE_SPECIFICATION_LIST,
        payload: {
          specificationListStatus: LOADED,
          list: testSpecList,
        },
      });
    });
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

const testSkillsList = ['React', 'JS', 'HTML'];

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
    sleep(1000).then(() => {
      dispatch({
        type: GET_EMPLOYEE_SKILLS_LIST,
        payload: {
          possibleSkillsStatus: LOADED,
          specification,
          possibleSkills: testSkillsList,
        },
      });
    });
  }
);

export const addSpecificationWithSkills = (specification) => (
  (dispatch) => {
    dispatch(chooseSpecification(specification));
    dispatch(getSkills(specification));
    dispatch(deleteSpecificationFromPossible(specification));
  }
);
