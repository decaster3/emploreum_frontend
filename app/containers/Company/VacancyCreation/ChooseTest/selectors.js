import { createSelector } from 'reselect';

/**
 * Direct selector to the inviteEmployee state domain
 */
const selectTests = (state) => state.get('chooseTestVacancy').get('tests');

export const selectTestsStatus = createSelector(
  selectTests,
  (testsStatus) => testsStatus.get('status')
);

export const selectTestsItems = createSelector(
  selectTests,
  (testsItems) => testsItems.get('items').toJS()
);
