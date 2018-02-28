import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCurrentContracts = (state) => state.get('employeeFinanceCurrentContracts').get('currentContracts');

export const selectCurrentContractsStatus = createSelector(
  selectCurrentContracts,
  (currentContractsStatus) => currentContractsStatus.get('status')
);

export const selectCurrentContractsItems = createSelector(
  selectCurrentContracts,
  (currentContractsItems) => currentContractsItems.get('items').toJS()
);

