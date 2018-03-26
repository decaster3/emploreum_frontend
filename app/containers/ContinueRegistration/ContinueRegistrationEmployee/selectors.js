import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationEmployee');
const selectRegistrationEmployeeSpecsSkills = (state) => state.get('specificationsSkills');

const selectRegistrationStep = createSelector(
   selectRegistrationEmployeeDomain,
   (registrationStep) => fromJS(registrationStep).get('registrationStep').get('step')
 );

const selectRegistrationStepStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (registrationStep) => fromJS(registrationStep).get('registrationStep').get('registrationStepStatus')
  );

const selectSpecificationList = createSelector(
    selectRegistrationEmployeeSpecsSkills,
    (specificationList) => specificationList.get('specificationList').get('list')
);

const selectSpecificationListStatus = createSelector(
    selectRegistrationEmployeeSpecsSkills,
    (specificationList) => specificationList.get('specificationList').get('specificationListStatus')
);

const selectChoosenSpecifications = createSelector(
    selectRegistrationEmployeeSpecsSkills,
    (choosenSpecifications) => choosenSpecifications.get('choosenSpecifications').get('items')
);

export const selectSubmitSpecificationButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingSpecification) => submittingSpecification.get('submittingSpecification')
);

export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
