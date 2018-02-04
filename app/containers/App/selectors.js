import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectUserSession = (state) => state.get('userSession');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectUserState = createSelector(
  selectUserSession,
  (userState) => userState.get('userAuth').get('userState')
)

export {
  makeSelectLocation,
  selectUserState,
};
