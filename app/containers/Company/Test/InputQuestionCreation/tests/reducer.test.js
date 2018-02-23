
import { fromJS } from 'immutable';
import inputQuestionCreationReducer from '../reducer';

describe('inputQuestionCreationReducer', () => {
  it('returns the initial state', () => {
    expect(inputQuestionCreationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
