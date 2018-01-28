/*
 *
 * StartPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_ROLE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function changeRole(role) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_ROLE,
      payload: role,
    });
  };
}
