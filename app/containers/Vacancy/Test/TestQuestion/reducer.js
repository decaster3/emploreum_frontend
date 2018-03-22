/*
 *
 * TestQuestion reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_QUESTION,
  CHANGE_STATE_QUESTION,
  CHANGE_SUBMIT_QUESTION_BUTTON_STATUS,
  CLEAR_QUESTION_REDUCER,
} from './constants';

const initialState = fromJS({
  question: {
    item: {},
    status: NOT_LOADED,
  },
  submittingQuestion: false,
});

function testQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return state.set('question', fromJS({
        status: state.get('question').get('status'),
        item: action.payload,
      }));
    case CHANGE_STATE_QUESTION:
      return state.set('question', fromJS({
        status: action.payload,
        item: state.get('question').get('item'),
      }));
    case CHANGE_SUBMIT_QUESTION_BUTTON_STATUS:
      return state
        .set('submittingQuestion', !state.get('submittingQuestion'));
    case CLEAR_QUESTION_REDUCER:
      return fromJS(initialState);
    default:
      return state;
  }
}

export default testQuestionReducer;
