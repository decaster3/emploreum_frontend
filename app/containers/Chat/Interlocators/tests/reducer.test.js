
import { fromJS } from 'immutable';
import companyEmployeesReducer from '../reducer';

describe('companyEmployeesReducer', () => {
  it('returns the initial state', () => {
    expect(companyEmployeesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
