import { createSelector } from 'reselect';

/**
 * Direct selector to the companyProfileContainer state domain
 */
const selectCompanyProfileContainerDomain = (state) => state.get('companyProfileContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompanyProfileContainer
 */

const makeSelectCompanyProfileContainer = () => createSelector(
  selectCompanyProfileContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectCompanyProfileContainer;
export {
  selectCompanyProfileContainerDomain,
};
