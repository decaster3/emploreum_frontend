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

const selectSpecificationList = createSelector(
    selectRegistrationEmployeeDomain,
    (specificationList) => specificationList.get('specificationList').get('list')
);

const selectSpecificationListStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (specificationList) => specificationList.get('specificationList').get('specificationListStatus')
);

const selectChoosenSpecifications = createSelector(
    selectRegistrationEmployeeDomain,
    (choosenSpecifications) => choosenSpecifications.get('choosenSpecifications').get('items')
);

export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
