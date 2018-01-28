import * as _ from 'lodash';
import registrationEmployeeReducer from '../reducer';
import {
  GET_EMPLOYEE_REGISTRATION_STEP,
  NONE,
} from '../constants';

describe('EmployeeRegistrationReducer', () => {
  it('returns the initial state', () => {
    const registrationEmployee = {
      startPage: {
        registrationStep: 'test',
      },
    };
    expect(_.isMatch(
      registrationEmployeeReducer(registrationEmployee,
        { type: GET_EMPLOYEE_REGISTRATION_STEP, payload: NONE }),
        { registrationStep: NONE }))
      .toEqual(true);
  });
});
