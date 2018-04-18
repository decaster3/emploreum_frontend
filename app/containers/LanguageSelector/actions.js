/*
 *
 * RegistrationEmployee actions
 *
 */
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
} from './constants';

import {
  getLanguagesAPI,
} from '../../services/api/Languages';
export const clearReducer = () => ({ type: CLEAR_LANGUAGE_SELECTOR });
export const getLanguage = () => (
  (dispatch) => {
    dispatch(showLoading());
    dispatch({
      type: GET_LANGUAGES,
      payload: {
        languageListStatus: LOADING,
        list: [],
      },
    });
    getLanguagesAPI((langList) => {
      dispatch(hideLoading());
      dispatch({
        type: GET_LANGUAGES,
        payload: {
          languageListStatus: LOADED,
          list: langList,
        },
      });
    }, (err) => {
      dispatch(hideLoading());
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

export const deleteLanguageFromChoosen = (language) => (
  (dispatch) => {
    dispatch({
      type: DELETE_LANGUAGE_FROM_CHOOSEN,
      payload: language,
    });
    dispatch(addLanguageToPossible(language));
  }
);

export const addLanguage = (language) => (
  (dispatch) => {
    dispatch(chooseLanguage(language));
    dispatch(deleteLanguageFromPossible(language));
  }
);
