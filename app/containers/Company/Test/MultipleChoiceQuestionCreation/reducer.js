/*
 *
 * TestCreation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS,
  CLEAR_MULTIPLE_QUESTION_CREATION,
} from './constants';

const initialState = fromJS({
  submittingMultipleQuestionCreation: false,
});

function multipleQuestionCreationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SUBMIT_CREATION_MULTIPLE_QUESTION_BUTTON_STATUS:
      return state
        .set('submittingMultipleQuestionCreation', !state.get('submittingMultipleQuestionCreation'));
    case CLEAR_MULTIPLE_QUESTION_CREATION:
      return fromJS(initialState);
    default:
      return state;
  }
}

export default multipleQuestionCreationReducer;
