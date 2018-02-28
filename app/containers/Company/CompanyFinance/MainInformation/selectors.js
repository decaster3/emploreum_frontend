import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectCompanyHeader = (state) => state.get('companyFinanceMainInfo');

export const selectHeader = createSelector(
  selectCompanyHeader,
  (state) => state.get('header').toJS()
);
