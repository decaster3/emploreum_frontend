import { createSelector } from 'reselect';

const selectVacancyCreation = (state) => state.get('vacancyCreation');

export const selectSpecificationList = createSelector(
    selectVacancyCreation,
    (specificationList) => specificationList.get('specificationList').get('list')
);

export const selectSpecificationListStatus = createSelector(
    selectVacancyCreation,
    (specificationList) => specificationList.get('specificationList').get('specificationListStatus')
);

export const selectChoosenSpecifications = createSelector(
    selectVacancyCreation,
    (choosenSpecifications) => choosenSpecifications.get('choosenSpecifications').get('items')
);
