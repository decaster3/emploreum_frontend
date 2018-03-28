import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
const selectKeywordsForSearch = (state) => state.get('keywordsFilter');

export const selectKeywords = createSelector(
  selectKeywordsForSearch,
  (state) => state.get('keywords').get('list').toJS()
);
