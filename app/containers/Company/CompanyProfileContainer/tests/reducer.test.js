
import { fromJS } from 'immutable';
import companyProfileContainerReducer from '../reducer';

describe('companyProfileContainerReducer', () => {
  it('returns the initial state', () => {
    expect(companyProfileContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
