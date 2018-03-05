import { createSelector } from 'reselect';

/**
 * Direct selector to the header state domain
 */
const selectNotifications = (state) => state.get('notifications').get('notifications');


export const selectNotificationsStatus = createSelector(
  selectNotifications,
  (notificationsStatus) => notificationsStatus.get('status')
);
// KOSTILLL!!!!!
export const selectNotificationsItems = createSelector(
  selectNotifications,
  (notificationsItems) => notificationsItems.get('items').toJS()
);

export const selectNotificationsCount = createSelector(
  selectNotifications,
  (notoficationCount) => notoficationCount.get('items').toJS().length
);

