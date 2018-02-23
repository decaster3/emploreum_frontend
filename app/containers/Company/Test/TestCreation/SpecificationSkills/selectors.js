import { createSelector } from 'reselect';

const selectRegistrationEmployeeSpecsSkills = (state) => state.get('specificationsSkillsTestCreation');

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

export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectSpecificationList,
};
