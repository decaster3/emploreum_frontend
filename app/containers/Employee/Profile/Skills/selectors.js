import { createSelector } from 'reselect';

/**
 * Direct selector to the skills state domain
 */
const selectSkillsDomain = (state) => state.get('skills').get('specificationsSkills');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Skills
 */

export const selectSpecificationsSkillsStatus = createSelector(
  selectSkillsDomain,
  (mainSpecificationsSkillsStatus) => mainSpecificationsSkillsStatus.get('status')
);

export const selectSpecificationsSkills = createSelector(
  selectSkillsDomain,
  (specificationsSkills) => specificationsSkills.get('items').toJS()
);
