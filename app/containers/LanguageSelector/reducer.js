/*
 *
 * RegistrationEmployee reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHOOSE_LANGUAGES,
  GET_LANGUAGES,
  NOT_LOADED,
  NOT_CHOOSEN,
  DELETE_LANGUAGE_FROM_POSSIBLE,
  ADD_LANGUAGE_TO_POSSIBLE,
  DELETE_LANGUAGE_FROM_CHOOSEN,
  CLEAR_LANGUAGE_SELECTOR,
} from './constants';

const initialState = fromJS({
  languageList: {
    languageListStatus: NOT_LOADED,
    list: [],
  },
  choosenLanguages: {
    choosenLanguagesStatus: NOT_CHOOSEN,
    items: [],
  },
});

function languageSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_LANGUAGE_SELECTOR:
      return fromJS(initialState);
    case GET_LANGUAGES:
      return state
        .set('languageList', fromJS(action.payload));

    case CHOOSE_LANGUAGES:
      return state
        .set('choosenLanguages', fromJS({
          choosenLanguagestatus: state.get('choosenLanguages').get('choosenLanguagestatus'),
          items: [...state.get('choosenLanguages').get('items'), action.payload.item],
        }));

    case DELETE_LANGUAGE_FROM_POSSIBLE: {
      const oldList = state.get('languageList').get('list').toJS();
      const pos = oldList.findIndex((i) => i.name === action.payload.name);
      oldList.splice(pos, 1);
      return state
        .set('languageList', fromJS({
          languageListStatus: state.get('languageList').get('languageListStatus'),
          list: oldList,
        }));
    }
    case ADD_LANGUAGE_TO_POSSIBLE: {
      const oldList = state.get('languageList').get('list').toJS();
      return state
        .set('languageList', fromJS({
          languageListStatus: state.get('languageList').get('languageListStatus'),
          list: [...oldList, { name: action.payload }],
        }));
    }

    case DELETE_LANGUAGE_FROM_CHOOSEN: {
      const getchoosenLanguages = state.get('choosenLanguages').toJS();
      const oldList = getchoosenLanguages.items.find((obj) =>
        obj.name === action.payload);
      const index = getchoosenLanguages.items.indexOf(oldList);
      getchoosenLanguages.items.splice(index, 1);
      return state.set('choosenLanguages', fromJS(getchoosenLanguages));
    }
    default:
      return state;
  }
}

export default languageSelectorReducer;
