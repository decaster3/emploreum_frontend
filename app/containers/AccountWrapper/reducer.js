/*
 *
 * EmployeeMain reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_VIEW,
} from './constants';

const initialState = fromJS({ view: 'profile' });

function accountWrapperReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return state
        .set('view', action.payload);
    default:
      return state;
  }
}

export default accountWrapperReducer;
