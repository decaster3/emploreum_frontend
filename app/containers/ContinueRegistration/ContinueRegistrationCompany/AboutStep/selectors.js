import { createSelector } from 'reselect';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationCompany');

export const selectSubmitAboutButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingAbout) => submittingAbout.get('submittingAbout')
);

export {
  selectRegistrationEmployeeDomain,
};
