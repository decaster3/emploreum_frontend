import { createSelector } from 'reselect';

/**
 * Direct selector to the tests state domain
 */
const selectTestsDomain = (state) => state.get('companyTests').get('tests');

export const selectTestsStatus = createSelector(
  selectTestsDomain,
  (testsStatus) => testsStatus.get('status')
);

export const selectTestsItems = createSelector(
  selectTestsDomain,
  (testsItems) => testsItems.get('items').toJS()
);
