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
} from './constants';
// imitation server
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
        step: 3,
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
    console.log(specification);
    dispatch({
      type: CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
      payload: {
        choosenSpecificationListStatus: CHOOSEN,
        item: specification,
      },
    });
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
  }
);

const testSkillsList = ['React', 'JS', 'HTML'];

export const getSkills = () => (
  (dispatch, getState) => {
    console.log(getState.specificationList.list);
    dispatch({
      type: GET_EMPLOYEE_SKILLS_LIST,
      payload: {
        specificationListStatus: LOADING,
        list: {},
      },
    });
    sleep(1000).then(() => {
      dispatch({
        type: GET_EMPLOYEE_SKILLS_LIST,
        payload: {
          specificationListStatus: LOADED,
          list: testSkillsList,
        },
      });
    });
  }
);
