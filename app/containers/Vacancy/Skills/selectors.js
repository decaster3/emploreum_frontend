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
  (specificationsSkills) => {
    const specifications =
      specificationsSkills.get('items').toJS().map((el) => ({
        name: el.name,
        id: el.id,
        skills: el.skills.map((skill) => ({
          name: skill.name,
          photoUrl: skill.photo_path,
          id: skill.id,
        })),
      }));
    return specifications;
  }
);
