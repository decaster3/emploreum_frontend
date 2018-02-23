import { fromJS } from 'immutable';
import {
  NOT_LOADED,
  GET_QUESTIONS,
  CHANGE_STATE_QUESTIONS,
  GET_TEST_INFO,
  CHANGE_STATE_TEST_INFO,
} from './constants';

const initialState = fromJS({
  testInfo: {
    item: {},
    status: NOT_LOADED,
  },
  questions: {
    items: [],
    status: NOT_LOADED,
  },
});

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return state.set('questions', fromJS({
        status: state.get('questions').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_QUESTIONS:
      return state.set('questions', fromJS({
        status: action.payload,
        items: state.get('questions').get('items'),
      }));
    case GET_TEST_INFO:
      return state.set('testInfo', fromJS({
        status: state.get('testInfo').get('status'),
        item: action.payload,
      }));
    case CHANGE_STATE_TEST_INFO:
      return state.set('testInfo', fromJS({
        status: action.payload,
        item: state.get('testInfo').get('item'),
      }));
    default:
      return state;
  }
}

export default questionsReducer;
