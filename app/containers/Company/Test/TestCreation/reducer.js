/*
 *
 * TestCreation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS,
  CLEAR_TEST_CREATION,
} from './constants';

const initialState = fromJS({
  submittingTestCreation: false,
});

function testCreationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS:
      return state
        .set('submittingTestCreation', !state.get('submittingTestCreation'));
    case CLEAR_TEST_CREATION:
      return fromJS(initialState);
    default:
      return state;
  }
}

export default testCreationReducer;
