
import { fromJS } from 'immutable';
import testCreationReducer from '../reducer';

describe('testCreationReducer', () => {
  it('returns the initial state', () => {
    expect(testCreationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
