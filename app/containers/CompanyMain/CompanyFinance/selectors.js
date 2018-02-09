import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectRecentPayments = (state) => state.get('companyFinance').get('recentPayments');
const selectOpenVacancies = (state) => state.get('companyFinance').get('openVacancies');
const selectEmployees = (state) => state.get('companyFinance').get('employees');

export const selectEmployeeStatus = createSelector(
  selectEmployees,
  (employeeStatus) => employeeStatus.get('status')
);

export const selectRecentPaymentsStatus = createSelector(
  selectRecentPayments,
  (recentPaymentsStatus) => recentPaymentsStatus.get('status')
);

export const selectOpenVacanciesStatus = createSelector(
  selectOpenVacancies,
  (openVacanciesStatus) => openVacanciesStatus.get('status')
);

export const selectOpenVacanciesItems = createSelector(
  selectOpenVacancies,
  (openVacanciesItems) => openVacanciesItems.get('items').toJS()
);

export const selectRecentPaymentsItems = createSelector(
  selectRecentPayments,
  (recentPaymentsItems) => recentPaymentsItems.get('items').toJS()
);

export const selectEmployeesItems = createSelector(
  selectEmployees,
  (employeesItems) => employeesItems.get('items').toJS()
);
