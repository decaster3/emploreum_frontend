import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper/Loadable';
import CompanyFinance from './CompanyFinance/Loadable';
import EmployeesSearch from '../EmployeesSearch/Loadable';
import VacancyCreation from './VacancyCreation/Loadable';
import Vacancy from '../Vacancy/Roles/CompanyView/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/CompanyView/Loadable';
import Tests from '../Company/Test/Tests/Loadable';
import TestCreation from '../Company/Test/TestCreation/Loadable';
import TestEdit from '../Company/Test/TestEdit/Loadable';
import TestInputQuestionCreation from '../Company/Test/InputQuestionCreation/Loadable';
import TestMultipleQuestionCreation from '../Company/Test/MultipleChoiceQuestionCreation/Loadable';
import ChatCreator from '../Chat/Loadable';
import CompanyProfile from '../CompanyProfile/Roles/SelfView/Loadable';

import CompanyProfileLink from '../CompanyProfile/preload';
import ChatLink from '../Chat/preload';
import CompanyFinanceLink from '../Company/CompanyFinance/preload';
import EmployeesSearchLink from '../EmployeesSearch/preload';
import CompanyTestsLink from './Test/Tests/preload';

function renderMenu() {
  return [{
    name: 'Profile',
    url: '/company/',
    icon: 'fa-user',
    link: CompanyProfileLink,
  }, {
    name: 'Employees',
    url: '/company/employee/search/',
    icon: 'fa-address-book',
    link: EmployeesSearchLink,
  }, {
    name: 'Finance',
    url: '/company/finance/',
    icon: 'fa-dollar',
    link: CompanyFinanceLink,
  }, {
    name: 'Tests',
    url: '/company/tests/',
    icon: 'fa-edit',
    link: CompanyTestsLink,
  }, {
    name: 'Chat',
    url: '/company/chat/',
    icon: 'fa-comments',
    link: ChatLink,
  }];
}

export const CompanyMain = () => (
  <AccountWrapperContainer menu={renderMenu()}>
    <ToastContainer />
    <Switch>
      <Route exact path="/company" component={CompanyProfile} />
      <Route path="/company/employee/search" component={EmployeesSearch} />
      <Route path="/company/finance" component={CompanyFinance} />
      <Route path="/company/vacancy/create" component={VacancyCreation} />
      <Route path="/company/vacancy/:id" component={Vacancy} />
      <Route path="/company/employee/:id" component={EmployeeProfile} />
      <Route exact path="/company/tests" component={Tests} />
      <Route path="/company/tests/new" component={TestCreation} />
      <Route exact path="/company/tests/:id" component={TestEdit} />
      <Route path="/company/tests/:id/question/new/inputtype" component={TestInputQuestionCreation} />
      <Route path="/company/tests/:id/question/new/multiple" component={TestMultipleQuestionCreation} />
      <Route path="/company/chat/:chatId?/" component={ChatCreator} />
    </Switch>
  </AccountWrapperContainer>
);
