
import { fromJS } from 'immutable';
import currentContratsReducer from '../reducer';

describe('currentContratsReducer', () => {
  it('returns the initial state', () => {
    expect(currentContratsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
