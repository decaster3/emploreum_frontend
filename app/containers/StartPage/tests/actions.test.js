import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  defaultAction,
  changeRole,
} from '../actions';
import {
  DEFAULT_ACTION,
  CHANGE_ROLE,
} from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('StartPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Change Role', () => {
    it('should change user role', () => {
      const store = mockStore({ role: 'NONE' });
      const role = 'test';
      const expected = {
        type: CHANGE_ROLE,
        payload: 'test',
      };
      store.dispatch(changeRole(role));
      expect(store.getActions()[0]).toEqual(expected);
    });
  });
});
