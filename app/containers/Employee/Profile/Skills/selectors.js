import { createSelector } from 'reselect';

/**
 * Direct selector to the skills state domain
 */
const selectSkillsDomain = (state) => state.get('skills').get('specificationsSkills');

/**
 * Other specific selectors
 */

// {
//   specifications:
//   [
//     {
//       name: 'qwe',
//       skills:
//       [
//         {
//           name: 'eqw',
//           photoUrl: 'ddd',
//         }
//       ]
//     }
//   ]
// }
/**
 * Default selector used by Skills
 */

export const selectSpecificationsSkillsStatus = createSelector(
  selectSkillsDomain,
  (mainSpecificationsSkillsStatus) => mainSpecificationsSkillsStatus.get('status')
);

export const selectSpecificationsSkills = createSelector(
  selectSkillsDomain,
  (specificationsSkills) => {
    const specifications =
      specificationsSkills.get('items').toJS().map((el) => ({
        name: el.profile.name,
        id: el.id,
        skills: el.skills.map((skill) => ({
          id: skill.id,
          name: skill.name,
          photoUrl: skill.photo_path,
        })),
      }));
    return specifications;
  }
);
