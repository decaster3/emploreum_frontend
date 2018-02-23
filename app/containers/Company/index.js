import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import CompanyProfileContainer from './CompanyProfileContainer';
import CompanyFinance from './CompanyFinance';
import VacancyCreation from './VacancyCreation/Loadable';
import Vacancy from '../Vacancy/Roles/CompanyView/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/CompanyView/Loadable';

function renderMenu() {
  return [{
    name: 'Profile',
    url: '/company',
    icon: 'fa-user',
  }, {
    name: 'Employees',
    url: '/company/',
    icon: 'fa-address-book',
  }, {
    name: 'Finance',
    url: '/company/finance',
    icon: 'fa-dollar',
  }];
}

export const CompanyMain = () => (
  <AccountWrapperContainer menu={renderMenu()}>
    <ToastContainer />
    <Switch>
      <Route exact path="/company" component={CompanyProfileContainer} />
      <Route path="/company/finance" component={CompanyFinance} />
      <Route path="/company/vacancy/create" component={VacancyCreation} />
      <Route path="/company/vacancy/:id" component={Vacancy} />
      <Route exact path="/company/employee/:id" component={EmployeeProfile} />
    </Switch>
  </AccountWrapperContainer>
);
