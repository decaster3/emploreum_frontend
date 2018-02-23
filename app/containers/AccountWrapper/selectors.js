import { createSelector } from 'reselect';

const selectEmployeeMainDomain = (state) => state.get('accountWrapper');

const selectView = () => createSelector(
  selectEmployeeMainDomain,
  (substate) => substate.get('view')
);

export {
  selectView,
  selectEmployeeMainDomain,
};
