
import { fromJS } from 'immutable';
import employeeMainReducer from '../reducer';

describe('employeeMainReducer', () => {
  it('returns the initial state', () => {
    expect(employeeMainReducer(undefined, {})).toEqual(fromJS({}));
  });
});
