import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeFinance from './EmployeeFinance/Loadable';
import EmployeeVacancies from './VacanciesSearch/Loadable';
import EmployeeProfile from './Profile/Loadable';
import Vacancy from '../Vacancy/Loadable';

export const EmployeeMain = () => (
  <AccountWrapperContainer url={'/employee'}>
    <Switch>
      <Route exact path="/employee" component={EmployeeProfile} />
      <Route path="/employee/finance" component={EmployeeFinance} />
      <Route path="/employee/vacancies" component={EmployeeVacancies} />
      <Route path="/employee/vacancy/:id" component={Vacancy} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
