/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHOOSE_SKILL_FILTER,
  GET_SKILLS_FILTER,
  NOT_LOADED,
  NOT_CHOOSEN,
  DELETE_SKILL_FILTER_FROM_POSSIBLE,
  ADD_SKILL_FILTER_TO_POSSIBLE,
  DELETE_SKILL_FILTER_FROM_CHOOSEN,
  CLEAR_SKILLS_FILTER_SELECTOR,
  SET_SKILLS_FILTERS,
} from './constants';

const initialState = fromJS({
  possibleSkills: {
    status: NOT_LOADED,
    list: [],
  },
  choosenSkills: {
    status: NOT_CHOOSEN,
    list: [],
  },
});

function skillsFilterReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_SKILLS_FILTER_SELECTOR:
      return fromJS(initialState);
    case SET_SKILLS_FILTERS: {
      const possibleLanguages = state.get('possibleSkills').get('list').toJS();
      action.payload.forEach((el) => {
        const pos = possibleLanguages.findIndex((i) => i.name === el.name);
        possibleLanguages.splice(pos, 1);
      });
      return fromJS({
        possibleSkills: {
          status: state.get('possibleSkills').get('status'),
          list: possibleLanguages,
        },
        choosenSkills: {
          status: state.get('choosenSkills').get('status'),
          list: action.payload,
        },
      });
    }
    case GET_SKILLS_FILTER:
      return state
        .set('possibleSkills', fromJS(action.payload));
    case CHOOSE_SKILL_FILTER:
      return state
        .set('choosenSkills', fromJS({
          status: state.get('choosenSkills').get('status'),
          list: [...state.get('choosenSkills').get('list'), action.payload.item],
        }));

    case DELETE_SKILL_FILTER_FROM_POSSIBLE: {
      const oldList = state.get('possibleSkills').get('list').toJS();
      const pos = oldList.findIndex((i) => i.id === action.payload.id);
      oldList.splice(pos, 1);
      return state
        .set('possibleSkills', fromJS({
          languageListStatus: state.get('possibleSkills').get('status'),
          list: oldList,
        }));
    }
    case ADD_SKILL_FILTER_TO_POSSIBLE: {
      const oldList = state.get('possibleSkills').get('list').toJS();
      return state
        .set('possibleSkills', fromJS({
          languageListStatus: state.get('possibleSkills').get('status'),
          list: [...oldList, action.payload],
        }));
    }

    case DELETE_SKILL_FILTER_FROM_CHOOSEN: {
      const getchoosenLanguages = state.get('choosenSkills').toJS();
      const elementForDelete = getchoosenLanguages.list.find((obj) =>
        obj.id === action.payload.id);
      const index = getchoosenLanguages.list.indexOf(elementForDelete);
      getchoosenLanguages.list.splice(index, 1);
      return state.set('choosenSkills', fromJS(getchoosenLanguages));
    }
    default:
      return state;
  }
}

export default skillsFilterReducer;
