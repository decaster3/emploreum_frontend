import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the registrationEmployee state domain
 */

 // state
const selectRegistrationEmployeeDomain = (state) => state.get('registration');

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

const selectRole = createSelector(
   selectRegistrationEmployeeDomain,
   (role) => role.get('role')
 );


export {
  selectRole,
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
