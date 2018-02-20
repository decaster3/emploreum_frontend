import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectMainInformation = (state) => state.get('userSession')
.get('userAuth').get('userInformation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainInformation
 */

export const selectMyId = createSelector(
  selectMainInformation,
  (id) => id.get('id')
);
