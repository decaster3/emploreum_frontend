import { createSelector } from 'reselect';

/**
 * Direct selector to the testNavigation state domain
 */
const selectTestQuestionsDomain = (state) => state.get('testNavigation').get('testQuestions');

export const selectTestQuestionsStatus = createSelector(
  selectTestQuestionsDomain,
  (testQuestionsStatus) => testQuestionsStatus.get('status')
);

export const selectTestQuestionsItems = createSelector(
  selectTestQuestionsDomain,
  (testQuestionsItems) => testQuestionsItems.get('items').toJS()
);

export const selectFirstQuestion = createSelector(
  selectTestQuestionsDomain,
  (firstQuestion) => firstQuestion.get('items').toJS()[0].id
);
