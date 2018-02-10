import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCurrentContracts = (state) => state.get('employeeFinance').get('currentContracts');
const selectEndedContracts = (state) => state.get('employeeFinance').get('endedContracts');

export const selectCurrentContractsStatus = createSelector(
  selectCurrentContracts,
  (currentContractsStatus) => currentContractsStatus.get('status')
);

export const selectEndedContractsStatus = createSelector(
  selectEndedContracts,
  (endedContractsStatus) => endedContractsStatus.get('status')
);

export const selectEndedContractsItems = createSelector(
  selectEndedContracts,
  (endedContractsItems) => endedContractsItems.get('items').toJS()
);

export const selectCurrentContractsItems = createSelector(
  selectCurrentContracts,
  (currentContractsItems) => currentContractsItems.get('items').toJS()
);
