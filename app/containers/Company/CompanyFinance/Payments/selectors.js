import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectRecentPayments = (state) => state.get('companyFinanceRecentPayments').get('recentPayments');

export const selectRecentPaymentsStatus = createSelector(
  selectRecentPayments,
  (recentPaymentsStatus) => recentPaymentsStatus.get('status')
);

export const selectIsTherePayments = createSelector(
  selectRecentPayments,
  (recentPaymentsItems) => recentPaymentsItems.get('items').toJS().length > 0
);

export const selectRecentPaymentsItems = createSelector(
  selectRecentPayments,
  (recentPaymentsItems) => recentPaymentsItems.get('items').toJS()
);
