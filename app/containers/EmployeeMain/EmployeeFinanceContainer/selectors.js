import { createSelector } from 'reselect';

/**
 * Direct selector to the employeeFinanceContainer state domain
 */
const selectEmployeeFinanceContainerDomain = (state) => state.get('finance');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeeFinanceContainer
 */

export {
  selectEmployeeFinanceContainerDomain,
};
