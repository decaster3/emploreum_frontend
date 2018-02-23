import { createSelector } from 'reselect';

/**
 * Direct selector to the testEdit state domain
 */
const selectTestDomain = (state) => state.get('testEdit');

export const selectTestQuestionsStatus = createSelector(
  selectTestDomain,
  (questionsStatus) => questionsStatus.get('questions').get('status')
);

export const selectTestQuestions = createSelector(
  selectTestDomain,
  (questionsItems) => questionsItems.get('questions').get('items').toJS()
);

export const selectTestInfo = createSelector(
  selectTestDomain,
  (testInfoItem) => testInfoItem.get('testInfo').get('item').toJS()
);

export const selectTestInfoStatus = createSelector(
  selectTestDomain,
  (testInfoStatus) => testInfoStatus.get('testInfo').get('status')
);
