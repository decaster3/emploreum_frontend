/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from '../NotFoundPage/Loadable';

import RolesRoutesSelector from './Routes/RolesRoutesSelector';

import {
  selectUserState,
  selectIsUserCompleteRegistration,
  selectUserRole,
 } from './selectors';

const App = (props) => (
  <Switch>
    {RolesRoutesSelector(props).map((r) => <Route exact path={r.path} component={r.component} key={r.path} />)}
    <Route component={NotFoundPage} />
  </Switch>
);

function mapStateToProps(state) {
  return {
    userRole: selectUserRole(state),
    userState: selectUserState(state),
    isUserCompleteRegistration: selectIsUserCompleteRegistration(state),
  };
}

App.propTypes = {
};


export default withRouter(connect(mapStateToProps, null)(App));
