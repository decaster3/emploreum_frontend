// import { fromJS } from 'immutable';
// import { selectRegistrationEmployeeDomain } from '../selectors';
import { fromJS } from 'immutable';
import selectReistrationStep from '../selectors';


describe('selectEmployeeRefistrationPage', () => {
  it('Expect to select just employee registration step', () => {
    const step = 'mxstbr';
    const mockedState = fromJS({
      registrationEmployee: {
        registrationStep: 'mxstbr',
      },
    });
    expect(fromJS(selectReistrationStep(mockedState))).toEqual(step);
  });
});
