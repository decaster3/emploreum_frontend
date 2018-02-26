import { createSelector } from 'reselect';

/**
 * Direct selector to the testQuestion state domain
 */
// const selectTestQuestionDomain = (state) => state.get('testQuestion');
const selectTestQuestionsDomain = (state) => state.get('testNavigation').get('testQuestions');
const selectTestQuestionDomain = (state) => state.get('testQuestion').get('question');
const selectTestQuestionAllDomain = (state) => state.get('testQuestion');
export const selectTestCurrentQuestion = (state) => state.get('testNavigation').get('currentQuestion').toJS();

export const selectFirstQuestion = createSelector(
  selectTestQuestionsDomain,
  (firstQuestion) => firstQuestion.get('items').toJS()[0].id
);

export const selectTestQuestionStatus = createSelector(
  selectTestQuestionDomain,
  (questionsStatus) => questionsStatus.get('status')
);

export const selectTestQuestion = createSelector(
  selectTestQuestionDomain,
  (questionsItems) => questionsItems.get('item').toJS()
);

export const selectSubmitQuestionButtonState = createSelector(
  selectTestQuestionAllDomain,
  (submittingQuestion) => submittingQuestion.get('submittingQuestion')
);

