
import { fromJS } from 'immutable';
import employeeFinanceContainerReducer from '../reducer';

describe('employeeFinanceContainerReducer', () => {
  it('returns the initial state', () => {
    expect(employeeFinanceContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
