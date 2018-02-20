import { createSelector } from 'reselect';

/**
 * Direct selector to the candidates state domain
 */
const selectCandidatesDomain = (state) => state.get('vacancyCandidates').get('candidates');

export const selectCandidatesStatus = createSelector(
  selectCandidatesDomain,
  (candidatesStatus) => candidatesStatus.get('status')
);

export const selectCandidatesItems = createSelector(
  selectCandidatesDomain,
  (candidatesItems) => candidatesItems.get('items').toJS()
);
