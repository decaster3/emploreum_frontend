import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectOpenVacancies = (state) => state.get('companyFinanceOpenVacancies').get('openVacancies');

export const selectOpenVacanciesStatus = createSelector(
  selectOpenVacancies,
  (openVacanciesStatus) => openVacanciesStatus.get('status')
);

export const selectOpenVacanciesItems = createSelector(
  selectOpenVacancies,
  (openVacanciesItems) => openVacanciesItems.get('items').toJS()
);

