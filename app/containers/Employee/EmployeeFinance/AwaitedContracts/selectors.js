import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectAwaitedContracts = (state) => state.get('employeeFinanceAwaitedContracts').get('awaitedContracts');

export const selectAwaitedContractsItems = createSelector(
  selectAwaitedContracts,
  (currentContractsItems) => currentContractsItems.get('items').toJS()
);

export const selectAwaitedContractsStatus = createSelector(
  selectAwaitedContracts,
  (currentContractsStatus) => currentContractsStatus.get('status')
);
