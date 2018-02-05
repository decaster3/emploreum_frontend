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
);

const selectUserRole = createSelector(
  selectUserSession,
  (userRole) => userRole.get('userAuth').get('userInformation').get('role') || undefined
);

const selectIsUserCompleteRegistration = createSelector(
  selectUserSession,
  (isUserCompleteRegistration) => {
    if (isUserCompleteRegistration.get('userAuth').get('userInformation').get('registrationStep')) {
      return false;
    }
    return true;
  }
);

export {
  selectUserRole,
  makeSelectLocation,
  selectUserState,
  selectIsUserCompleteRegistration,
};
