/*
 *
 * RegistrationEmployee actions
 *
 */
import {
  UP_REGISTRATION_STEP,
  DOWN_REGISTRATION_STEP,
  GET_EMPLOYEE_REGISTRATION_STEP,
  LOADING,
  LOADED,
  CHOOSE_EMPLOYEE_SPECIFICATION_LIST,
  CHOOSEN,
  DELETE_SPECIFICATION_FROM_POSSIBLE,
  ADD_SPECIFICATION_TO_POSSIBLE,
  DELETE_SPECIFICATION_FROM_CHOOSEN,
  GET_EMPLOYEE_SPECIFICATION_LIST,
} from './constants';
// imitation server
import {
  submitCompanySpecificationsSkillsAPI,
  submitCompanyAboutAPI,
 } from '../../services/api/register';

import { updateRegistrationStep } from '../UserSession/actions';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

export const upRegistrationStep = () => ({ type: UP_REGISTRATION_STEP });
export const downRegistrationStep = () => ({ type: DOWN_REGISTRATION_STEP });


export const submitSpecificationSkillsStep = () => (
  (dispatch, getState) => {
    console.log(getState());
    const arrOfChoosenSpecifications = getState().get('continueRegistrationCompany')
      .get('choosenSpecifications').get('items');
    submitCompanySpecificationsSkillsAPI(arrOfChoosenSpecifications, (data) => {
// надо тестить
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
    submitCompanyAboutAPI({ name, about }, () => {
      dispatch(upRegistrationStep());
    }, (err) => {
      console.log(err);
    }, dispatch);
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


export const addSpecificationWithSkills = (specification) => (
  (dispatch) => {
    dispatch(chooseSpecification(specification));
    dispatch(deleteSpecificationFromPossible(specification));
  }
);
