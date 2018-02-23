
import { fromJS } from 'immutable';
import testsReducer from '../reducer';

describe('testsReducer', () => {
  it('returns the initial state', () => {
    expect(testsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
