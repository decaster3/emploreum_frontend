import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectStartPage = (state) => state.get('startPage');


const selectRole = createSelector(
  selectStartPage,
  (role) => fromJS(role).get('role')
);

export default selectRole;
export {
  selectStartPage,
};
