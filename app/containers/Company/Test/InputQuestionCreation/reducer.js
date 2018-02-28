/*
 *
 * TestCreation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS,
  CLEAR_INPUT_QUESTION_CREATION,
} from './constants';

const initialState = fromJS({
  submittingInputQuestionCreation: false,
});

function inputQuestionCreationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_CREATION_INPUT_QUESTION_BUTTON_STATUS:
      return state
        .set('submittingInputQuestionCreation', !state.get('submittingInputQuestionCreation'));
    case CLEAR_INPUT_QUESTION_CREATION:
      return fromJS(initialState);
    default:
      return state;
  }
}

export default inputQuestionCreationReducer;
