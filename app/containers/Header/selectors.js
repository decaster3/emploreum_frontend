import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectUserInitialsDomain = (state) => state.get('userSession').get('userAuth');

export const selectUserInitials = createSelector(
  selectUserInitialsDomain,
  (userInitials) => userInitials.get('userInformation').toJS()
);
