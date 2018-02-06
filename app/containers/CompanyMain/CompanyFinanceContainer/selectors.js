import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCompanyFinanceContainerDomain = (state) => state.get('companyFinanceContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompanyFinanceContainer
 */

const makeSelectCompanyFinanceContainer = () => createSelector(
  selectCompanyFinanceContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectCompanyFinanceContainer;
export {
  selectCompanyFinanceContainerDomain,
};
