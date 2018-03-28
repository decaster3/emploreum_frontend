import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
const selecSkillsForSearch = (state) => state.get('skillsFilter');

export const selectChoosenSkills = createSelector(
  selecSkillsForSearch,
  (state) => state.get('choosenSkills').get('list').toJS()
);

export const selectPossibleSkills = createSelector(
  selecSkillsForSearch,
  (state) => state.get('possibleSkills').get('list').toJS()
);

