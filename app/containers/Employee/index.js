import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeFinance from './EmployeeFinance/Loadable';
import EmployeeVacancies from './VacanciesSearch/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/SelfView/Loadable';
import Vacancy from '../Vacancy/Roles/EmployeeView/Loadable';

export const EmployeeMain = () => (
  <AccountWrapperContainer url={'/employee'}>
    <ToastContainer />
    <Switch>
      <Route exact path="/employee" component={EmployeeProfile} />
      <Route path="/employee/finance" component={EmployeeFinance} />
      <Route path="/employee/vacancies" component={EmployeeVacancies} />
      <Route path="/employee/vacancy/:id" component={Vacancy} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
