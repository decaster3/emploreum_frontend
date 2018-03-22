import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectInterlocators = (state) => state.get('chatInterlocators').get('interlocators');
export const selectCurrentInterlocator = (state) => state.get('chatInterlocators').get('currentInterlocator').get('item').toJS();
export const selectCurrentInterlocatorStatus = (state) => state.get('chatInterlocators').get('currentInterlocator').get('status');

export const selectInterlocatorsStatus = createSelector(
  selectInterlocators,
  (interlocatorsStatus) => interlocatorsStatus.get('status')
);

export const selectIsThereInterlocators = createSelector(
  selectInterlocators,
  (interlocatorsItems) => interlocatorsItems.get('items').toJS().length > 0
);

export const selectInterlocatorsItems = createSelector(
  selectInterlocators,
  (interlocatorsItems) => interlocatorsItems.get('items').toJS()
);
