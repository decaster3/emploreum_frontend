/*
 *
 * RegistrationEmployee actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_LEVEL,
  CLEAR_LEVEL,
} from './constants';

export const clearReducer = () => ({ type: CLEAR_LEVEL });

const addLevelToUrl = (level) => (
  (dispatch, getState) => {
    const allUrl = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentUrl = decodeURIComponent(allUrl[allUrl.length - 1]) === ''
      ? {}
      : JSON.parse(decodeURIComponent(allUrl[allUrl.length - 1]));
    currentUrl.level = level;
    const urll = allUrl;
    urll[allUrl.length - 1] = encodeURIComponent(JSON.stringify(currentUrl));
    let currentStringUrl = '';
    allUrl.forEach((el) => {
      currentStringUrl = `${currentStringUrl}/${el}`;
    });
    dispatch(push(currentStringUrl));
  }
);

export const getLevelFromUrl = () => (
  (dispatch, getState) => {
    const urlArray = getState().get('route').get('location').get('pathname').slice(1).split('/');
    const currentSearchUrl = urlArray[urlArray.length - 1];
    const currentUrl = decodeURIComponent(currentSearchUrl) === '' ? {} : JSON.parse(decodeURIComponent(currentSearchUrl));
    if (currentUrl.level) {
      dispatch({
        type: CHANGE_LEVEL,
        payload: currentUrl.level,
      });
    }
  }
);

export const changeLevel = (level) => (
  (dispatch) => {
    dispatch({
      type: CHANGE_LEVEL,
      payload: level,
    });
    dispatch(addLevelToUrl(level));
  }
);
