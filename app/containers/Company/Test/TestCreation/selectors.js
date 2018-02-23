import { createSelector } from 'reselect';

/**
 * Direct selector to the testCreation state domain
 */
const selectTestCreationDomain = (state) => state.get('testCreation');

export const selectSubmitTestCreationButtonState = createSelector(
  selectTestCreationDomain,
  (submittingTestCreation) => submittingTestCreation.get('submittingTestCreation')
);
