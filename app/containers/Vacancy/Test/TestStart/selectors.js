import { createSelector } from 'reselect';

/**
 * Direct selector to the testStart state domain
 */
const selectTestStartDomain = (state) => state.get('testStart');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestStart
 */

const makeSelectTestStart = () => createSelector(
  selectTestStartDomain,
  (substate) => substate.toJS()
);

export default makeSelectTestStart;
export {
  selectTestStartDomain,
};
