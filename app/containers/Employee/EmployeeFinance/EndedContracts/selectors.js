import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectEndedContracts = (state) => state.get('employeeFinanceEndedContracts').get('endedContracts');

export const selectEndedContractsStatus = createSelector(
  selectEndedContracts,
  (endedContractsStatus) => endedContractsStatus.get('status')
);

export const selectIsThereEndedContracts = createSelector(
  selectEndedContracts,
  (endedContractsStatus) => endedContractsStatus.get('items').toJS().length > 0
);


export const selectEndedContractsItems = createSelector(
  selectEndedContracts,
  (endedContractsItems) => endedContractsItems.get('items').toJS()
);
