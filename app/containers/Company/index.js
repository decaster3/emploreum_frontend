import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import CompanyProfileContainer from './CompanyProfileContainer';
import CompanyFinance from './CompanyFinance';
import VacancyCreation from './VacancyCreation/Loadable';
import Vacancy from '../Vacancy/Roles/CompanyView/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/CompanyView/Loadable';
import Tests from '../Company/Test/Tests/Loadable';
import TestCreation from '../Company/Test/TestCreation/Loadable';
import TestEdit from '../Company/Test/TestEdit/Loadable';
export const CompanyMain = () => (
  <AccountWrapperContainer url={'/company'}>
    <ToastContainer />
    <Switch>
      <Route exact path="/company" component={CompanyProfileContainer} />
      <Route path="/company/finance" component={CompanyFinance} />
      <Route path="/company/vacancy/create" component={VacancyCreation} />
      <Route path="/company/vacancy/:id" component={Vacancy} />
      <Route path="/company/employee/:id" component={EmployeeProfile} />
      <Route exact path="/company/tests" component={Tests} />
      <Route path="/company/tests/new" component={TestCreation} />
      <Route path="/company/tests/:id" component={TestEdit} />
    </Switch>
  </AccountWrapperContainer>
);
