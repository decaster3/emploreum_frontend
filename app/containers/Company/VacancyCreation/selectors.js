import { createSelector } from 'reselect';

const selectRegistrationEmployeeDomain = (state) => state.get('vacancyCreation');

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
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
};
