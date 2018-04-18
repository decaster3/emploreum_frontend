/*
 *
 * MainInformation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STATE_ABOUT_COMPANY_INFO,
  NOT_LOADED,
  GET_ABOUT_COMPANY_INFO,
  RESET_ABOUT_COMPANY_PROFILE,
} from './constants';

const initialState = fromJS({
  mainInformation: {
    info: {},
    status: NOT_LOADED,
  },
});

function mainInformationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ABOUT_COMPANY_INFO:
      return state.set('mainInformation', fromJS({
        status: state.get('mainInformation').get('status'),
        info: action.payload,
      }));
    case CHANGE_STATE_ABOUT_COMPANY_INFO:
      return state.set('mainInformation', fromJS({
        status: action.payload,
        info: state.get('mainInformation').get('info'),
      }));
    case RESET_ABOUT_COMPANY_PROFILE:
      return state.set('mainInformation', fromJS({
        info: {},
        status: NOT_LOADED,
      }));
    default:
      return state;
  }
}

export default mainInformationReducer;
