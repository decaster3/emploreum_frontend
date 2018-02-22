import { createSelector } from 'reselect';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationCompany');
const selectRegistrationEmployeeSpecs = (state) => state.get('specificationSkillsCompanyRegistration');

const selectSpecificationList = createSelector(
    selectRegistrationEmployeeSpecs,
    (specificationList) => specificationList.get('specificationList').get('list')
);

const selectSpecificationListStatus = createSelector(
    selectRegistrationEmployeeSpecs,
    (specificationList) => specificationList.get('specificationList').get('specificationListStatus')
);

const selectChoosenSpecifications = createSelector(
    selectRegistrationEmployeeSpecs,
    (choosenSpecifications) => choosenSpecifications.get('choosenSpecifications').get('items')
);

export const selectSubmitSpecificationButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingSpecification) => submittingSpecification.get('submittingSpecification')
);


export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
};
