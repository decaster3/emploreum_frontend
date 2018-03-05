/*
 *
 * InviteEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_TESTS_VACANCY,
  CHANGE_STATE_TESTS_VACANCY,
  NOT_LOADED,
  CHOOSE_TEST_VACANCY,
} from './constants';

const initialState = fromJS({
  tests: {
    items: [],
    status: NOT_LOADED,
  },
  choosenTest: {},
});


function vacancyCreationTestsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TESTS_VACANCY:
      return state.set('tests', fromJS({
        status: state.get('tests').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_TESTS_VACANCY:
      return state.set('tests', fromJS({
        status: action.payload,
        items: state.get('tests').get('items'),
      }));
    case CHOOSE_TEST_VACANCY:
      return state.set('choosenTest', fromJS(action.payload));
    default:
      return state;
  }
}

export default vacancyCreationTestsReducer;
