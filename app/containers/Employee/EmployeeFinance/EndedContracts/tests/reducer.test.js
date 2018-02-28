
import { fromJS } from 'immutable';
import endedContractsReducer from '../reducer';

describe('endedContractsReducer', () => {
  it('returns the initial state', () => {
    expect(endedContractsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
