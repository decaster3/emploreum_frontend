
import { fromJS } from 'immutable';
import employeeEnrollStateReducer from '../reducer';

describe('employeeEnrollStateReducer', () => {
  it('returns the initial state', () => {
    expect(employeeEnrollStateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
