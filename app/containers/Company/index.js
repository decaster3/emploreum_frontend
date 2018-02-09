import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import CompanyProfileContainer from './CompanyProfileContainer';
import CompanyFinance from './CompanyFinance';

export const CompanyMain = () => (
  <AccountWrapperContainer url={'/company'}>
    <Switch>
      <Route exact path="/company" component={CompanyProfileContainer} />
      <Route path="/company/finance" component={CompanyFinance} />
    </Switch>
  </AccountWrapperContainer>
);
