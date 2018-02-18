
import { fromJS } from 'immutable';
import candidatesReducer from '../reducer';

describe('candidatesReducer', () => {
  it('returns the initial state', () => {
    expect(candidatesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
