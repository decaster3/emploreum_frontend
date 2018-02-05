import { createSelector } from 'reselect';

/**
 * Direct selector to the companyMain state domain
 */
const selectCompanyMainDomain = (state) => state.get('companyMain');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompanyMain
 */

const makeSelectCompanyMain = () => createSelector(
  selectCompanyMainDomain,
  (substate) => substate.toJS()
);

export default makeSelectCompanyMain;
export {
  selectCompanyMainDomain,
};
