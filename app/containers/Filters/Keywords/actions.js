/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHOOSE_KEYWORD,
  DELETE_KEYWORD,
  CLEAR_KEYWORDS,
  SET_KEYWORDS,
} from './constants';

export const clearReducer = () => ({ type: CLEAR_KEYWORDS });

const addKeywordToUrl = (keyword, currentSearchUrl, allUrl) => (
  (dispatch) => {
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.keywords) {
      currentUrl.keywords.push(keyword);
    } else {
      currentUrl.keywords = [];
      currentUrl.keywords.push(keyword);
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

const deleteKeywordFromUrl = (keyword, currentSearchUrl, allUrl) => (
  (dispatch) => {
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.keywords) {
      const pos = currentUrl.keywords.findIndex((el) => el === keyword);
      currentUrl.keywords.splice(pos, 1);
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
export const getKeywordsFromUrl = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.keywords) {
      dispatch({
        type: SET_KEYWORDS,
        payload: currentUrl.keywords,
      });
    }
  }
);

export const addKeyword = (keyword) => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    if (!getState().get('keywordsFilter').get('keywords').get('list').toJS().includes(keyword)) {
      dispatch({
        type: CHOOSE_KEYWORD,
        payload: keyword,
      });
      dispatch(addKeywordToUrl(keyword, currentSearchUrl, urlArray));
    }
  }
);

export const deleteKeyword = (keyword) => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    dispatch({
      type: DELETE_KEYWORD,
      payload: keyword,
    });
    dispatch(deleteKeywordFromUrl(keyword, currentSearchUrl, urlArray));
  }
);
