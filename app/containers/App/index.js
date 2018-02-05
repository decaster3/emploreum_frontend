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
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StartPage from '../StartPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Registration from '../Registration/Loadable';
import EmployeeMain from '../EmployeeMain/Loadable';
import UserSession from '../UserSession/Loadable';
import { selectUserState } from './selectors';

const App = (props) => {
  const { userState } = props;

  return (
    <div>
      <Switch>
        {userState === 'ANONYMOUS'
          ? <Route exact path="/" component={StartPage} />
          : <Route exact path="/" component={EmployeeMain} />
        }
        <Route exact path="/employee" component={EmployeeMain} />
        <Route exact path="/" component={StartPage} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={UserSession} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userState: selectUserState(state),
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
