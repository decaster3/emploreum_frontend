import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeFinance from './EmployeeFinance/Loadable';
import EmployeeVacancies from './VacanciesSearch/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/SelfView/Loadable';
import Vacancy from '../Vacancy/Roles/EmployeeView/Loadable';
import TestVacancyEmployeeMain from '../Vacancy/Test/Loadable';
function renderMenu() {
  return [{
    name: 'Profile',
    url: '/employee',
    icon: 'fa-user',
  }, {
    name: 'Vacancies',
    url: '/employee/vacancies',
    icon: 'fa-address-book',
  }, {
    name: 'Finance',
    url: '/employee/finance',
    icon: 'fa-dollar',
  }];
}

export const EmployeeMain = () => (
  <AccountWrapperContainer menu={renderMenu()}>
    <ToastContainer />
    <Switch>
      <Route exact path="/employee" component={EmployeeProfile} />
      <Route path="/employee/finance" component={EmployeeFinance} />
      <Route path="/employee/vacancies" component={EmployeeVacancies} />
      <Route exact path="/employee/vacancy/:id" component={Vacancy} />
      <Route path="/employee/vacancy/:id/test/:question?/" component={TestVacancyEmployeeMain} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
