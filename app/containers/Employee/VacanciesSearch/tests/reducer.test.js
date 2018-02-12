
import { fromJS } from 'immutable';
import vacanciesSearchReducer from '../reducer';

describe('vacanciesSearchReducer', () => {
  it('returns the initial state', () => {
    expect(vacanciesSearchReducer(undefined, {})).toEqual(fromJS({}));
  });
});
