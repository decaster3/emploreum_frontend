/*
 *
 * RegistrationEmployee actions
 *
 */

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

// import {
  // getLanguagesAPI,
// } from '../../services/api/Languages';
export const clearReducer = () => ({ type: CLEAR_LANGUAGE_SELECTOR });
const mockLanguages = [{ name: 'lang1' }, { name: 'lang2' }];
export const getLanguage = () => (
  (dispatch) => {
    dispatch({
      type: GET_LANGUAGES,
      payload: {
        languageListStatus: LOADING,
        list: [],
      },
    });
    // getLanguagesAPI((langList) => {
      // console.log(langList);
    dispatch({
      type: GET_LANGUAGES,
      payload: {
        languageListStatus: LOADED,
        list: mockLanguages,
      },
    });
    // }, (err) => {
      // console.log(err);
    // }, dispatch);
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
