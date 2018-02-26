
import { fromJS } from 'immutable';
import testQuestionReducer from '../reducer';

describe('testQuestionReducer', () => {
  it('returns the initial state', () => {
    expect(testQuestionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
