import { createSelector } from 'reselect';

/**
 * Direct selector to the candidates state domain
 */
const selectCandidatesDomain = (state) => state.get('candidates');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Candidates
 */

const makeSelectCandidates = () => createSelector(
  selectCandidatesDomain,
  (substate) => substate.toJS()
);

export default makeSelectCandidates;
export {
  selectCandidatesDomain,
};
