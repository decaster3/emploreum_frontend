import { createSelector } from 'reselect';

/**
 * Direct selector to the MultipleQuestionCreation state domain
 */
const selectMultipleQuestionCreationDomain = (state) => state.get('multipleChoiceQuestionCreation');

export const selectSubmitMultipleQuestionCreationButtonState = createSelector(
  selectMultipleQuestionCreationDomain,
  (submittingMultipleQuestionCreation) => submittingMultipleQuestionCreation.get('submittingMultipleQuestionCreation')
);

