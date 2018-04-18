import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeFinance from './EmployeeFinance/Loadable';
import EmployeeVacancies from '../VacanciesSearch/Loadable';
import EmployeeProfile from '../EmployeeProfile/Roles/SelfView/Loadable';
import Vacancy from '../Vacancy/Roles/EmployeeView/Loadable';
import TestVacancyEmployeeMain from '../Vacancy/Test/Loadable';
import StartTest from '../Vacancy/TestStart/Loadable';
import ChatCreator from '../Chat/Loadable';
import CompanyProfile from '../CompanyProfile/Roles/EmployeeView/Loadable';

import EmployeeFinanceLink from './EmployeeFinance/preload';
import EmployeeProfileLink from '../EmployeeProfile/preload';
import ChatLink from '../Chat/preload';
import VacanciesSearchLink from '../VacanciesSearch/preload';

class EmployeeMain extends React.Component {
  renderMenu() {
    return [{
      name: 'Profile',
      url: '/employee/',
      icon: 'fa-user',
      link: EmployeeProfileLink,
    }, {
      name: 'Vacancies',
      url: '/employee/vacancies/',
      icon: 'fa-address-book',
      link: VacanciesSearchLink,
    }, {
      name: 'Finance',
      url: '/employee/finance/',
      icon: 'fa-dollar',
      link: EmployeeFinanceLink,
    }, {
      name: 'Chat',
      url: '/employee/chat/',
      icon: 'fa-comments',
      link: ChatLink,
    }];
  }

  render() {
    return (
      <AccountWrapperContainer menu={this.renderMenu()}>
        <ToastContainer />
        <Switch>
          <Route exact path="/employee" component={EmployeeProfile} />
          <Route path="/employee/finance" component={EmployeeFinance} />
          <Route path="/employee/vacancies/" component={EmployeeVacancies} />
          <Route exact path="/employee/vacancy/:id" component={Vacancy} />
          <Route path="/employee/vacancy/:id/test/:question?/" component={TestVacancyEmployeeMain} />
          <Route path="/employee/vacancy/:id/preview/test" component={StartTest} />
          <Route path="/employee/chat/:chatId?/" component={ChatCreator} />
          <Route path="/employee/company/:companyId" component={CompanyProfile} />
        </Switch>
      </AccountWrapperContainer>
    );
  }
}

export default EmployeeMain;
