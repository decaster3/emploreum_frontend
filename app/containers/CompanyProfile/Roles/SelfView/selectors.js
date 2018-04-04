import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectMainInformation = (state) => state.get('userSession')
.get('userAuth').get('userInformation');
// export const isComponentLoading = (state) => {
//   if (state.get('companyProfileeOpenVacancies')) {
//     const ov = state.get('companyProfileeOpenVacancies').get('openVacancies').get('status');
//     // const pr = state.get('companyProfileRating').get('rating').get('status');
//     // const mi = state.get('companyProfileMainInformation').get('mainInformation').get('status');
//     return !(ov === 'LOADED');
//         // pr === 'LOADED' &&
//         // mi === 'LOADED');
//   }
//   return true;
// };
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
