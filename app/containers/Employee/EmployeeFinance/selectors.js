import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCurrentContracts = (state) => state.get('employeeFinance').get('currentContracts');
const selectEndedContracts = (state) => state.get('employeeFinance').get('endedContracts');
const selectAwaitedContracts = (state) => state.get('employeeFinance').get('awaitedContracts');
const selectAddress = (state) => state.get('employeeFinance').get('address');

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

export const selectAwaitedContractsItems = createSelector(
  selectAwaitedContracts,
  (currentContractsItems) => currentContractsItems.get('items').toJS()
);

export const selectAwaitedContractsStatus = createSelector(
  selectAwaitedContracts,
  (currentContractsStatus) => currentContractsStatus.get('status')
);

export const selectAddressName = createSelector(
  selectAddress,
  (addressName) => addressName.get('name')
);

export const selectAddressStatus = createSelector(
  selectAddress,
  (addressStatus) => addressStatus.get('status')
);
