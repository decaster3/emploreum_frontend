import * as _ from 'lodash';
import startPageReducer from '../reducer';
import {
  CHANGE_ROLE,
  NONE,
} from '../constants';

describe('startPageReducer', () => {
  it('returns the initial state', () => {
    const stateTest = {
      startPage: {
        role: 'test',
      },
    };
    expect(_.isMatch(
      startPageReducer(stateTest,
        { type: CHANGE_ROLE, payload: NONE }),
        { role: NONE }))
      .toEqual(true);
  });
});
