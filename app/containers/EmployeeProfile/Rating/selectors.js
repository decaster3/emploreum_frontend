import { createSelector } from 'reselect';

/**
 * Direct selector to the mainInformation state domain
 */
const selectEmployeeRating = (state) => state.get('employeeProfileRating').get('rating');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainInformation
 */

export const selectRatingStatus = createSelector(
  selectEmployeeRating,
  (ratingStatus) => ratingStatus.get('status')
);

export const selectRatingValue = createSelector(
  selectEmployeeRating,
  (ratingValue) => ratingValue.get('value')
);
