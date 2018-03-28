import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
const selectLanguagesForSearch = (state) => state.get('languagesFilter');

export const selectChoosenLanguages = createSelector(
  selectLanguagesForSearch,
  (state) => state.get('choosenLanguages').get('list').toJS()
);

export const selectPossibleLanguages = createSelector(
  selectLanguagesForSearch,
  (state) => state.get('languageList').get('list').toJS()
);

