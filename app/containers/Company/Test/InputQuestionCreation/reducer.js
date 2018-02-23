/*
 *
 * TestCreation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS,
} from './constants';

const initialState = fromJS({
  submittingInputQuestionCreation: false,
});

function testCreationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS:
      return state
        .set('submittingInputQuestionCreation', !state.get('submittingInputQuestionCreation'));
    default:
      return state;
  }
}

export default testCreationReducer;
