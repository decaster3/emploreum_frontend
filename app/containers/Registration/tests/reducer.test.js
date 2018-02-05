
import { fromJS } from 'immutable';
import continueRegistrationReducer from '../reducer';

describe('continueRegistrationReducer', () => {
  it('returns the initial state', () => {
    expect(continueRegistrationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
