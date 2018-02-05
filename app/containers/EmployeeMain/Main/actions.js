/*
 *
 * EmployeeMain actions
 *
 */

import {
  CHANGE_VIEW,
} from './constants';

export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    payload: view,
  };
}
