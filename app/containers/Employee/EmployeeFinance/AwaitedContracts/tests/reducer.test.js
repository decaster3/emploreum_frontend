
import { fromJS } from 'immutable';
import awaitedContractsReducer from '../reducer';

describe('awaitedContractsReducer', () => {
  it('returns the initial state', () => {
    expect(awaitedContractsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
