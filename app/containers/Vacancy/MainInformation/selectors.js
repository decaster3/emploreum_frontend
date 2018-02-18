import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectMainInformation = (state) => state.get('vacancyMainInformation').get('mainInformation');
const selectUser = (state) => state.get('userSession')
.get('userAuth').get('userInformation');

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainInformation
 */

export const selectMainInformationStatus = createSelector(
  selectMainInformation,
  (mainInformationStatus) => mainInformationStatus.get('status')
);

export const selectMainInfo = createSelector(
  selectMainInformation,
  (mainInfo) => mainInfo.get('info').toJS()
);

export const selectUserRole = createSelector(
  selectUser,
  (role) => role.get('role')
);
