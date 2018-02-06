import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import Test from './Test';
import EmployeeFinanceContainer from './EmployeeFinanceContainer';

export const EmployeeMain = (props) => (
  <AccountWrapperContainer url={'/employee'}>
    <Switch>
      <Route exact path="/employee" component={Test} />
      <Route path="/employee/finance" component={EmployeeFinanceContainer} />
    </Switch>
  </AccountWrapperContainer>
);
