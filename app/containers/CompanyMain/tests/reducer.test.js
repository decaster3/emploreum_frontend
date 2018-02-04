
import { fromJS } from 'immutable';
import companyMainReducer from '../reducer';

describe('companyMainReducer', () => {
  it('returns the initial state', () => {
    expect(companyMainReducer(undefined, {})).toEqual(fromJS({}));
  });
});
