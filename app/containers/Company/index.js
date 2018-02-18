import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import CompanyProfileContainer from './CompanyProfileContainer';
import CompanyFinance from './CompanyFinance';
import VacancyCreation from './VacancyCreation/Loadable';
import Vacancy from '../Vacancy/Loadable';
export const CompanyMain = () => (
  <AccountWrapperContainer url={'/company'}>
    <ToastContainer />
    <Switch>
      <Route exact path="/company" component={CompanyProfileContainer} />
      <Route path="/company/finance" component={CompanyFinance} />
      <Route path="/company/vacancy/create" component={VacancyCreation} />
      <Route path="/company/vacancy/:id" component={Vacancy} />
    </Switch>
  </AccountWrapperContainer>
);
