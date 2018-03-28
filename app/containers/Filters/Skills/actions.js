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
  getLanguagesAPI,
} from '../../../services/api/Languages';
export const clearReducer = () => ({ type: CLEAR_SKILLS_FILTER_SELECTOR });

const addSkillToUrl = (skill) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    if (currentUrl.skills) {
      currentUrl.skills.push(skill);
    } else {
      currentUrl.skills = [];
      currentUrl.skills.push(skill);
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
    if (currentUrl.skills) {
      const pos = currentUrl.skills.findIndex((el) => el === skill);
      currentUrl.skills.splice(pos, 1);
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
    if (currentUrl.skills) {
      dispatch({
        type: SET_SKILLS_FILTERS,
        payload: currentUrl.skills,
      });
    }
  }
);

const getPossibleSkills = () => (
  (dispatch) => {
    dispatch({
      type: GET_SKILLS_FILTER,
      payload: {
        languageListStatus: LOADING,
        list: [],
      },
    });
    return getLanguagesAPI((langList) => {
      dispatch({
        type: GET_SKILLS_FILTER,
        payload: {
          languageListStatus: LOADED,
          list: langList,
        },
      });
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

export const chooseSkill = (skill) => (
  (dispatch) => {
    dispatch({
      type: CHOOSE_SKILL_FILTER,
      payload: {
        choosenLanguageListStatus: CHOOSEN,
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
