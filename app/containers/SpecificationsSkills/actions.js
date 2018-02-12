/*
 *
 * RegistrationEmployee actions
 *
 */

import {
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
  CLEAR,
} from './constants';

import {
  getSpecificationsAPI,
  getSkillsFromSpecificationAPI,
} from '../../services/api/SkillsSpecifications';

export const clear = () => ({ type: CLEAR });

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
