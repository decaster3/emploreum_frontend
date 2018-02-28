
import { fromJS } from 'immutable';
import mainInformationReducer from '../reducer';

describe('mainInformationReducer', () => {
  it('returns the initial state', () => {
    expect(mainInformationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
