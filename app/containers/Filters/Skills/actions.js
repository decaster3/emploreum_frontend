/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  LOADING,
  LOADED,
  CHOOSE_SKILL_FILTER,
  CHOOSEN,
  DELETE_SKILL_FILTER_FROM_POSSIBLE,
  ADD_SKILL_FILTER_TO_POSSIBLE,
  DELETE_SKILL_FILTER_FROM_CHOOSEN,
  GET_SKILLS_FILTER,
  CLEAR_SKILLS_FILTER_SELECTOR,
  SET_SKILLS_FILTERS,
} from './constants';

import {
  getSkillsSpecificationsFilterAPI,
} from '../../../services/api/SkillsSpecifications';

export const clearReducer = () => ({ type: CLEAR_SKILLS_FILTER_SELECTOR });

const addSkillToUrl = (skill) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    if (currentUrl.profileSkills) {
      currentUrl.profileSkills.push(skill);
    } else {
      currentUrl.profileSkills = [];
      currentUrl.profileSkills.push(skill);
    }
    const urll = allUrl;
    urll[allUrl.length - 1] = encodeURIComponent(JSON.stringify(currentUrl));
    let currentStringUrl = '';
    allUrl.forEach((el) => {
      currentStringUrl = `${currentStringUrl}/${el}`;
    });
    dispatch(push(currentStringUrl));
  }
);

const deleteSkillFromUrl = (skill) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    if (currentUrl.profileSkills) {
      const pos = currentUrl.profileSkills.findIndex((el) => el === skill);
      currentUrl.profileSkills.splice(pos, 1);
    }
    allUrl[allUrl.length - 1] = encodeURIComponent(JSON.stringify(currentUrl));
    let currentStringUrl = '';
    allUrl.forEach((el) => {
      currentStringUrl = `${currentStringUrl}/${el}`;
    });
    dispatch(push(currentStringUrl));
  }
);
const getSkillsFromUrl = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.profileSkills) {
      dispatch({
        type: SET_SKILLS_FILTERS,
        payload: currentUrl.profileSkills,
      });
    }
  }
);

const getPossibleSkills = () => (
  (dispatch) => {
    dispatch({
      type: GET_SKILLS_FILTER,
      payload: {
        status: LOADING,
        list: [],
      },
    });
    return getSkillsSpecificationsFilterAPI((data) => {
      dispatch({
        type: GET_SKILLS_FILTER,
        payload: {
          status: LOADED,
          list: data,
        },
      });
    }, (err) => {
      if (err[0].id) {
        dispatch({
          type: GET_SKILLS_FILTER,
          payload: {
            status: LOADED,
            list: err,
          },
        });
      }
      console.log(err);
    }, dispatch);
  }
);

export const chooseSkill = (skill) => (
  (dispatch) => {
    dispatch({
      type: CHOOSE_SKILL_FILTER,
      payload: {
        status: CHOOSEN,
        item: skill,
      },
    });
  }
);
export const deleteSkillFromPossible = (skill) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SKILL_FILTER_FROM_POSSIBLE,
      payload: skill,
    });
  }
);
export const addSkillToPossible = (skill) => (
  (dispatch) => {
    dispatch({
      type: ADD_SKILL_FILTER_TO_POSSIBLE,
      payload: skill,
    });
  }
);

export const deleteSkill = (skill) => (
  (dispatch) => {
    dispatch({
      type: DELETE_SKILL_FILTER_FROM_CHOOSEN,
      payload: skill,
    });
    dispatch(addSkillToPossible(skill));
    dispatch(deleteSkillFromUrl(skill));
  }
);

export const addSkill = (skill) => (
  (dispatch) => {
    dispatch(chooseSkill(skill));
    dispatch(deleteSkillFromPossible(skill));
    dispatch(addSkillToUrl(skill));
  }
);

export const getSkills = () => (
  (dispatch) => {
    dispatch(getPossibleSkills()).then(() => {
      dispatch(getSkillsFromUrl());
    });
  }
);
