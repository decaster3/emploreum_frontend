
import { fromJS } from 'immutable';
import testNavigationReducer from '../reducer';

describe('testNavigationReducer', () => {
  it('returns the initial state', () => {
    expect(testNavigationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
