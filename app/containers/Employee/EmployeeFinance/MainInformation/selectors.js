import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectAddress = (state) => state.get('employeeFinanceMainInformation');

export const selectHeader = createSelector(
  selectAddress,
  (state) => state.get('header').toJS()
);

export const selectAddressStatus = createSelector(
  selectAddress,
  (addressStatus) => addressStatus.get('status')
);
