import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectOpenVacancies = (state) => state.get('companyFinanceOpenVacancies').get('openVacancies');

const selectMainInformation = (state) => state.get('userSession')
.get('userAuth').get('userInformation');

export const selectOpenVacanciesStatus = createSelector(
  selectOpenVacancies,
  (openVacanciesStatus) => openVacanciesStatus.get('status')
);

export const selectIsThereOpenVacancies = createSelector(
  selectOpenVacancies,
  (openVacanciesItems) => openVacanciesItems.get('items').toJS().length > 0
);

export const selectOpenVacanciesItems = createSelector(
  selectOpenVacancies,
  (openVacanciesItems) => openVacanciesItems.get('items').toJS()
);

export const selectMyId = createSelector(
  selectMainInformation,
  (id) => id.get('id')
);

