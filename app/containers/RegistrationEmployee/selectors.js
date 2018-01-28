import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the registrationEmployee state domain
 */

 // state
const selectRegistrationEmployeeDomain = (state) => state.get('registrationEmployee');

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
    (specificationList) => specificationList.get('list')
);

const selectSpecificationListStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (specificationList) => specificationList.get('specificationListStatus')
);

const selectSkillsList = createSelector(
    selectRegistrationEmployeeDomain,
    (skillsList) => skillsList.list
);

const selectSkillsListStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (skillsList) => skillsList.skillsListStatus
);

export {
  selectSkillsListStatus,
  selectSpecificationListStatus,
  selectSkillsList,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
