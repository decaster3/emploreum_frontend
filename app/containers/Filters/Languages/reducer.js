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
  SET_LANGUAGES,
} from './constants';

const initialState = fromJS({
  languageList: {
    languageListStatus: NOT_LOADED,
    list: [],
  },
  choosenLanguages: {
    choosenLanguagesStatus: NOT_CHOOSEN,
    list: [],
  },
});

function languageSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_LANGUAGE_SELECTOR:
      return fromJS(initialState);
    case SET_LANGUAGES: {
      const possibleLanguages = state.get('languageList').get('list').toJS();
      action.payload.forEach((el) => {
        const pos = possibleLanguages.findIndex((i) => i.id === el.id);
        possibleLanguages.splice(pos, 1);
      });
      return fromJS({
        languageList: {
          languageListStatus: state.get('languageList').get('languageListStatus'),
          list: possibleLanguages,
        },
        choosenLanguages: {
          choosenLanguagesStatus: state.get('choosenLanguages').get('choosenLanguagesStatus'),
          list: action.payload,
        },
      });
    }
    case GET_LANGUAGES:
      return state
        .set('languageList', fromJS(action.payload));
    case CHOOSE_LANGUAGES:
      return state
        .set('choosenLanguages', fromJS({
          choosenLanguageStatus: state.get('choosenLanguages').get('choosenLanguagestatus'),
          list: [...state.get('choosenLanguages').get('list'), action.payload.item],
        }));

    case DELETE_LANGUAGE_FROM_POSSIBLE: {
      const oldList = state.get('languageList').get('list').toJS();
      const pos = oldList.findIndex((i) => i.id === action.payload.id);
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
          list: [...oldList, action.payload],
        }));
    }

    case DELETE_LANGUAGE_FROM_CHOOSEN: {
      const getchoosenLanguages = state.get('choosenLanguages').toJS();
      const elementForDelete = getchoosenLanguages.list.find((obj) =>
        obj.id === action.payload.id);
      const index = getchoosenLanguages.list.indexOf(elementForDelete);
      getchoosenLanguages.list.splice(index, 1);
      return state.set('choosenLanguages', fromJS(getchoosenLanguages));
    }
    default:
      return state;
  }
}

export default languageSelectorReducer;
