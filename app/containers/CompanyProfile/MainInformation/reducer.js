/*
 *
 * MainInformation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STATE_COMPANY_PROFILE_MAIN_INFO,
  NOT_LOADED,
  GET_COMPANY_PROFILE_MAIN_INFO,
} from './constants';

const initialState = fromJS({
  mainInformation: {
    info: {},
    status: NOT_LOADED,
  },
});

function mainInformationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_PROFILE_MAIN_INFO:
      return state.set('mainInformation', fromJS({
        status: state.get('mainInformation').get('status'),
        info: action.payload,
      }));
    case CHANGE_STATE_COMPANY_PROFILE_MAIN_INFO:
      return state.set('mainInformation', fromJS({
        status: action.payload,
        info: state.get('mainInformation').get('info'),
      }));
    default:
      return state;
  }
}

export default mainInformationReducer;
