import { createSelector } from 'reselect';

export const selectEmployeeVacancyViewDomain = (state) => state.get('employeeEnrollVacancyState');

export const selectEnrollButtonState = createSelector(
  selectEmployeeVacancyViewDomain,
  (enrollButtonState) => enrollButtonState.get('enrollButtonState')
);

