import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import CompanyProfileContainer from './CompanyProfileContainer';
import CompanyFinanceContainer from './CompanyFinanceContainer';

export const CompanyMain = () => (
  <AccountWrapperContainer url={'/company'}>
    <Switch>
      <Route exact path="/company" component={CompanyProfileContainer} />
      <Route path="/company/finance" component={CompanyFinanceContainer} />
    </Switch>
  </AccountWrapperContainer>
);
