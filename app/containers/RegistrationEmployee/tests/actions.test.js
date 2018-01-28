import {
  defaultAction,
} from '../actions';
import {
  DEFAULT_ACTION,
  NONE,
} from '../constants';


describe('RegistrationEmployee actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
  describe('Get Registration Step', () => {
    it('should execute employee registration step', () => {
      const notExpected = {
        registrationStep: NONE,
      };
      expect(defaultAction()).not.toEqual(notExpected);
    });
  });
});
