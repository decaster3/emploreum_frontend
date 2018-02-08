import { createSelector } from 'reselect';

/**
 * Direct selector to the user state domain
 */
export const selectUserDomain = (state) => state.get('userSession');

/**
 * Other specific selectors
 */


/**
 * Default selector used by User
 */

export const selectUserStatus = createSelector(
  selectUserDomain,
  (userStatus) => userStatus.get('userAuth').get('userState')
);
