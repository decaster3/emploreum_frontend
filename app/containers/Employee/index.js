import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeFinance from './EmployeeFinance/Loadable';
import EmployeeVacancies from './VacanciesSearch/Loadable';
import EmployeeProfile from './Profile/Loadable';

export const EmployeeMain = () => (
  <AccountWrapperContainer url={'/employee'}>
    <Switch>
      <Route exact path="/employee" component={EmployeeProfile} />
      <Route path="/employee/finance" component={EmployeeFinance} />
      <Route path="/employee/vacancies" component={EmployeeVacancies} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
