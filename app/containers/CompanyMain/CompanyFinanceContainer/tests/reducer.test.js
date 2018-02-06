
import { fromJS } from 'immutable';
import companyFinanceContainerReducer from '../reducer';

describe('companyFinanceContainerReducer', () => {
  it('returns the initial state', () => {
    expect(companyFinanceContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
