import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectMainInformation = (state) => state.get('companyProfileAbout').get('mainInformation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainInformation
 */

export const selectCompanyInfoStatus = createSelector(
  selectMainInformation,
  (mainInformationStatus) => mainInformationStatus.get('status')
);

export const selectCompanyInfo = createSelector(
  selectMainInformation,
  (mainInfo) => mainInfo.get('info').toJS()
);
