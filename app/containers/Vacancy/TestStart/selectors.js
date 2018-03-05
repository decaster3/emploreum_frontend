import { createSelector } from 'reselect';

/**
 * Direct selector to the testStart state domain
 */
const selectTestStartDomain = (state) => state.get('testStart');
const selectRoute = (state) => state.get('route');


export const selectStartingTest = createSelector(
  selectTestStartDomain,
  (startingTest) => startingTest.get('startingTest')
);

export const selectVacancyId = createSelector(
  selectRoute,
  (vacancyId) => vacancyId.get('location').get('pathname').split('/')[3]
);
