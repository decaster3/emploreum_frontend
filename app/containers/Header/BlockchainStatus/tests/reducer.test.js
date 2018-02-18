
import { fromJS } from 'immutable';
import blockchainStatusReducer from '../reducer';

describe('blockchainStatusReducer', () => {
  it('returns the initial state', () => {
    expect(blockchainStatusReducer(undefined, {})).toEqual(fromJS({}));
  });
});
