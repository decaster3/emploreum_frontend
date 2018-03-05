import { createSelector } from 'reselect';

/**
 * Direct selector to the inviteEmployee state domain
 */
const selectTest = (state) => state.get('chooseTestVacancy');


export const selectChoosenTest = createSelector(
  selectTest,
(choosenTest) => choosenTest ? choosenTest.get('choosenTest').toJS() : undefined
);
