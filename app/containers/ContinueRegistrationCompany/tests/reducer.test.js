
import { fromJS } from 'immutable';
import continueRegistrationEmployeeReducer from '../reducer';

describe('continueRegistrationEmployeeReducer', () => {
  it('returns the initial state', () => {
    expect(continueRegistrationEmployeeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
