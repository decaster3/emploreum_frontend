import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectCompanyRating = (state) => state.get('companyProfileRating').get('rating');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainInformation
 */

export const selectRatingStatus = createSelector(
  selectCompanyRating,
  (ratingStatus) => ratingStatus.get('status')
);

export const selectRatingValue = createSelector(
  selectCompanyRating,
  (ratingValue) => ratingValue.get('value')
);
