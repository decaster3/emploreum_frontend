import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
// const selectVacanciesSearchDomain = (state) => state.get('vacanciesSearch');
const selectVacancies = (state) => state.get('vacanciesSearch').get('vacancies');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VacanciesSearch
 */

export const selectVacanciesStatus = createSelector(
  selectVacancies,
  (vacanciesStatus) => vacanciesStatus.get('status')
);

export const selectVacanciesItems = createSelector(
  selectVacancies,
  (vacanciesItems) => vacanciesItems.get('items').toJS()
);
