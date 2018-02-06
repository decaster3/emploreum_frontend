import { createSelector } from 'reselect';

/**
 * Direct selector to the employeeMain state domain
 */
const selectEmployeeMainDomain = (state) => state.get('accountWrapper');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeeMain
 */

const selectView = () => createSelector(
  selectEmployeeMainDomain,
  (substate) => substate.get('view')
);


export {
  selectView,
  selectEmployeeMainDomain,
};
