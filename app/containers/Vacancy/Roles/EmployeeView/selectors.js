import { createSelector } from 'reselect';


export const selectEmployeeVacancyViewDomain = (state) => state.get('employeeViewVacancy');

export const selectEnrollButtonState = createSelector(
  selectEmployeeVacancyViewDomain,
  (enrollButtonState) => enrollButtonState.get('enrollButtonState')
);
