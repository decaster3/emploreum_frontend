
import { fromJS } from 'immutable';
import testEditReducer from '../reducer';

describe('testEditReducer', () => {
  it('returns the initial state', () => {
    expect(testEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});
