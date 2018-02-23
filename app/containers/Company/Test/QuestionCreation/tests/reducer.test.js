
import { fromJS } from 'immutable';
import questionCreationReducer from '../reducer';

describe('questionCreationReducer', () => {
  it('returns the initial state', () => {
    expect(questionCreationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
