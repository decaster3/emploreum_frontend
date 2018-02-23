import { createSelector } from 'reselect';

/**
 * Direct selector to the questionCreation state domain
 */
const selectQuestionCreationDomain = (state) => state.get('questionCreation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by QuestionCreation
 */

const makeSelectQuestionCreation = () => createSelector(
  selectQuestionCreationDomain,
  (substate) => substate.toJS()
);

export default makeSelectQuestionCreation;
export {
  selectQuestionCreationDomain,
};
