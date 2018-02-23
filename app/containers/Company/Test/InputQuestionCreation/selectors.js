import { createSelector } from 'reselect';

/**
 * Direct selector to the inputQuestionCreation state domain
 */
const selectInputQuestionCreationDomain = (state) => state.get('inputQuestionCreation');

export const selectSubmitInputQuestionCreationButtonState = createSelector(
  selectInputQuestionCreationDomain,
  (submittingInputQuestionCreation) => submittingInputQuestionCreation.get('submittingInputQuestionCreation')
);

