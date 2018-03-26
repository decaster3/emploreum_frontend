import { createSelector } from 'reselect';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationAbout');

export const selectSubmitAboutButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingAbout) => submittingAbout.get('submittingAbout')
);

export {
  selectRegistrationEmployeeDomain,
};
