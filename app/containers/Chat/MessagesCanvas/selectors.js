import { createSelector } from 'reselect';

/**
 * Direct selector to the companyFinanceContainer state domain
 */
const selectMessages = (state) => state.get('chatMessages').get('messages');
export const selectMyId = (state) => state.get('userSession').get('userAuth').get('userInformation').get('id');

export const selectMessagesStatus = createSelector(
  selectMessages,
  (messagesStatus) => messagesStatus.get('status')
);

export const selectIsThereMessages = createSelector(
  selectMessages,
  (messagesItems) => messagesItems.get('items').toJS().length > 0
);

export const selectMessagesItems = createSelector(
  selectMessages,
  (messagesItems) => messagesItems.get('items').toJS()
);
