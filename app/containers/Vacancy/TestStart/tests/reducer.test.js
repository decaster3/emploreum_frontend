
import { fromJS } from 'immutable';
import testStartReducer from '../reducer';

describe('testStartReducer', () => {
  it('returns the initial state', () => {
    expect(testStartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
