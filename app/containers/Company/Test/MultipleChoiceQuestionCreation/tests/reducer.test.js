
import { fromJS } from 'immutable';
import multipleChoiceQuestionCreationReducer from '../reducer';

describe('multipleChoiceQuestionCreationReducer', () => {
  it('returns the initial state', () => {
    expect(multipleChoiceQuestionCreationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
