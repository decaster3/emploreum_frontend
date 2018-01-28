// import { fromJS } from 'immutable';
import { fromJS } from 'immutable';
import selectRole from '../selectors';


describe('selectStartPage', () => {
  it('Expect to have unit tests specified', () => {
    const role = 'mxstbr';
    const mockedState = fromJS({
      startPage: {
        role: 'mxstbr',
      },
    });
    expect(fromJS(selectRole(mockedState))).toEqual(role);
  });
});
