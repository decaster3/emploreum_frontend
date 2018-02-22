import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationCompany');

const selectRegistrationStep = createSelector(
   selectRegistrationEmployeeDomain,
   (registrationStep) => fromJS(registrationStep).get('registrationStep').get('step')
 );

const selectRegistrationStepStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (registrationStep) => fromJS(registrationStep).get('registrationStep').get('registrationStepStatus')
  );

export {
  selectRegistrationStep,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
