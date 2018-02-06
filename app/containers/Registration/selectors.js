import { createSelector } from 'reselect';

/**
 * Direct selector to the continueRegistration state domain
 */
const selectContinueRegistrationDomain = (state) => state.get('registration');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContinueRegistration
 */

export const selectRegistrationStep = createSelector(
  selectContinueRegistrationDomain,
  (registrationStep) => registrationStep.get('registrationStep')
);

export const selectRole = createSelector(
  selectContinueRegistrationDomain,
  (registrationStep) => registrationStep.get('role')
);
