/*
 *
 * employeeRatingReducer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STATE_RATING,
  NOT_LOADED,
  GET_RATING,
} from './constants';

const initialState = fromJS({
  rating: {
    value: '',
    status: NOT_LOADED,
  },
});

function employeeRatingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RATING:
      return state.set('rating', fromJS({
        status: state.get('rating').get('status'),
        value: action.payload,
      }));
    case CHANGE_STATE_RATING:
      return state.set('rating', fromJS({
        status: action.payload,
        value: state.get('rating').get('value'),
      }));
    default:
      return state;
  }
}

export default employeeRatingReducer;
