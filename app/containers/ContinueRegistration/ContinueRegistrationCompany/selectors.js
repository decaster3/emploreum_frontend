import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationCompany');
const selectRegistrationEmployeeSpecs = (state) => state.get('specificationSkillsCompanyRegistration');

const selectRegistrationStep = createSelector(
   selectRegistrationEmployeeDomain,
   (registrationStep) => fromJS(registrationStep).get('registrationStep').get('step')
 );

const selectRegistrationStepStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (registrationStep) => fromJS(registrationStep).get('registrationStep').get('registrationStepStatus')
  );

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

export const selectSubmitAboutButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingAbout) => submittingAbout.get('submittingAbout')
);

export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
