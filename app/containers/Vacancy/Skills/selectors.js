import { createSelector } from 'reselect';

/**
 * Direct selector to the skills state domain
 */
const selectSkillsDomain = (state) => state.get('skillsVacancySearch').get('specificationsSkills');

export const selectSpecificationsSkillsStatus = createSelector(
  selectSkillsDomain,
  (mainSpecificationsSkillsStatus) => mainSpecificationsSkillsStatus.get('status')
);

export const selectSpecificationsSkills = createSelector(
  selectSkillsDomain,
  (specificationsSkills) => specificationsSkills.get('items').toJS()
);
