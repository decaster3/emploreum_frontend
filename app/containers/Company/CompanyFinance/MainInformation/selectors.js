import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCompanyMainInformationDomain = (state) => state.get('companyFinanceMainInfo');

export const selectMainInformationItems = createSelector(
  selectCompanyMainInformationDomain,
  (mainInformationItems) => mainInformationItems.get('header').toJS()
);

export const selectMainInformationStatus = createSelector(
  selectCompanyMainInformationDomain,
  (mainInformationItemsStatus) => mainInformationItemsStatus.get('header').get('status')
);
