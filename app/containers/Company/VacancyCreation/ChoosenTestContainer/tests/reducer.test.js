
import { fromJS } from 'immutable';
import inviteEmployeeReducer from '../reducer';

describe('inviteEmployeeReducer', () => {
  it('returns the initial state', () => {
    expect(inviteEmployeeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
