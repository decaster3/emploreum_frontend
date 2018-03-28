import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
const selectLevelForSearch = (state) => state.get('levelFilter');

export const selectLevel = createSelector(
  selectLevelForSearch,
  (state) => state.get('level').get('item')
);
