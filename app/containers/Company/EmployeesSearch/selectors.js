import { createSelector } from 'reselect';

/**
 * Direct selector to the vacanciesSearch state domain
 */
// const selectVacanciesSearchDomain = (state) => state.get('vacanciesSearch');
const selectEmployeesForSearch = (state) => state.get('employeesSearch');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VacanciesSearch
 */

export const selectEmployeesLoadStatus = createSelector(
  selectEmployeesForSearch,
  (state) => state.get('status')
);

export const selectEmployees = createSelector(
  selectEmployeesForSearch,
  (state) => state.get('employees').toJS()
);
