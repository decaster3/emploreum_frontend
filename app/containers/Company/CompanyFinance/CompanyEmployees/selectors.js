import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectEmployees = (state) => state.get('companyFinanceWorkingEmployees').get('employees');

export const selectEmployeeStatus = createSelector(
  selectEmployees,
  (employeeStatus) => employeeStatus.get('status')
);

export const selectIsThereEmployeesContracts = createSelector(
  selectEmployees,
  (employeesItems) => employeesItems.get('items').toJS().length > 0
);

export const selectEmployeesItems = createSelector(
  selectEmployees,
  (employeesItems) => employeesItems.get('items').toJS()
);
