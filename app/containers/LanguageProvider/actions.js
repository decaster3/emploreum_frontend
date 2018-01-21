/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
} from './constants';

export function changeLocale(languageLocale) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_LOCALE,
      locale: languageLocale,
    });
  };
}
