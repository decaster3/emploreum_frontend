
import { fromJS } from 'immutable';
import openVacanciesReducer from '../reducer';

describe('openVacanciesReducer', () => {
  it('returns the initial state', () => {
    expect(openVacanciesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
