import { createSelector } from 'reselect';

/**
 * Direct selector to the employeeMain state domain
 */
const selectEmployeeMainDomain = (state) => state.get('employeeMain');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmployeeMain
 */

const makeSelectEmployeeMain = () => createSelector(
  selectEmployeeMainDomain,
  (substate) => substate.toJS()
);

export default makeSelectEmployeeMain;
export {
  selectEmployeeMainDomain,
};
