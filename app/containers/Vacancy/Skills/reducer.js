/*
 *
 * Skills reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_STATE_SPECIFICATIONS_SKILLS_VACANCY,
  NOT_LOADED,
  GET_SPECIFICATIONS_SKILLS_VACANCY,
} from './constants';

const initialState = fromJS({
  specificationsSkills: {
    items: [],
    status: NOT_LOADED,
  },
});

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SPECIFICATIONS_SKILLS_VACANCY:
      return state.set('specificationsSkills', fromJS({
        status: state.get('specificationsSkills').get('status'),
        items: action.payload,
      }));
    case CHANGE_STATE_SPECIFICATIONS_SKILLS_VACANCY:
      return state.set('specificationsSkills', fromJS({
        status: action.payload,
        items: state.get('specificationsSkills').get('items'),
      }));
    default:
      return state;
  }
}

export default skillsReducer;
