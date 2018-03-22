import { createSelector } from 'reselect';

/**
 * Direct selector to the skills state domain
 */
const selectSkillsDomain = (state) => state.get('employeeProfileSpecificationsSkills').get('specificationsSkills');

/**
 * Other specific selectors
 */

export const selectSpecificationsSkillsStatus = createSelector(
  selectSkillsDomain,
  (mainSpecificationsSkillsStatus) => mainSpecificationsSkillsStatus.get('status')
);

export const selectSpecificationsSkills = createSelector(
  selectSkillsDomain,
  (specificationsSkills) => specificationsSkills.get('items').toJS()
);
