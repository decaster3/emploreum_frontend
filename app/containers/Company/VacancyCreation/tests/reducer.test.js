
import { fromJS } from 'immutable';
import vacancyCreationReducer from '../reducer';

describe('vacancyCreationReducer', () => {
  it('returns the initial state', () => {
    expect(vacancyCreationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
