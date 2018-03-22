import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectMainInformationDomain = (state) => state.get('employeeFinanceMainInformation');

export const selectMainInformationItems = createSelector(
  selectMainInformationDomain,
  (mainInformationItems) => mainInformationItems.get('header').toJS()
);

export const selectMainInformationStatus = createSelector(
  selectMainInformationDomain,
  (mainInformationStatus) => mainInformationStatus.get('status')
);
