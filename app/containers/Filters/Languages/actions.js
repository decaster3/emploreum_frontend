/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  LOADING,
  LOADED,
  CHOOSE_LANGUAGES,
  CHOOSEN,
  DELETE_LANGUAGE_FROM_POSSIBLE,
  ADD_LANGUAGE_TO_POSSIBLE,
  DELETE_LANGUAGE_FROM_CHOOSEN,
  GET_LANGUAGES,
  CLEAR_LANGUAGE_SELECTOR,
  SET_LANGUAGES,
} from './constants';

import {
  getLanguagesAPI,
} from '../../../services/api/Languages';
export const clearReducer = () => ({ type: CLEAR_LANGUAGE_SELECTOR });

const addLanguageToUrl = (language) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    if (currentUrl.languages) {
      currentUrl.languages.push(language);
    } else {
      currentUrl.languages = [];
      currentUrl.languages.push(language);
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

const deleteLanguageFromUrl = (language) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    if (currentUrl.languages) {
      const pos = currentUrl.languages.findIndex((el) => el === language);
      currentUrl.languages.splice(pos, 1);
    }
    allUrl[allUrl.length - 1] = encodeURIComponent(JSON.stringify(currentUrl));
    let currentStringUrl = '';
    allUrl.forEach((el) => {
      currentStringUrl = `${currentStringUrl}/${el}`;
    });
    dispatch(push(currentStringUrl));
  }
);
const getLanguagesFromUrl = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.languages) {
      dispatch({
        type: SET_LANGUAGES,
        payload: currentUrl.languages,
      });
    }
  }
);

const getPossibleLanguage = () => (
  (dispatch) => {
    dispatch({
      type: GET_LANGUAGES,
      payload: {
        languageListStatus: LOADING,
        list: [],
      },
    });
    return getLanguagesAPI((langList) => {
      dispatch({
        type: GET_LANGUAGES,
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

export const chooseLanguage = (language) => (
  (dispatch) => {
    dispatch({
      type: CHOOSE_LANGUAGES,
      payload: {
        choosenLanguageListStatus: CHOOSEN,
        item: language,
      },
    });
  }
);
export const deleteLanguageFromPossible = (language) => (
  (dispatch) => {
    dispatch({
      type: DELETE_LANGUAGE_FROM_POSSIBLE,
      payload: language,
    });
  }
);
export const addLanguageToPossible = (language) => (
  (dispatch) => {
    dispatch({
      type: ADD_LANGUAGE_TO_POSSIBLE,
      payload: language,
    });
  }
);

export const deleteLanguage = (language) => (
  (dispatch) => {
    dispatch({
      type: DELETE_LANGUAGE_FROM_CHOOSEN,
      payload: language,
    });
    dispatch(addLanguageToPossible(language));
    dispatch(deleteLanguageFromUrl(language));
  }
);

export const addLanguage = (language) => (
  (dispatch) => {
    console.log(language)
    dispatch(chooseLanguage(language));
    dispatch(deleteLanguageFromPossible(language));
    dispatch(addLanguageToUrl(language));
  }
);

export const getLanguages = () => (
  (dispatch) => {
    dispatch(getPossibleLanguage()).then(() => {
      console.log(123);
      dispatch(getLanguagesFromUrl());
    });
  }
);
