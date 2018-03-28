import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import NavigationBarWrapper from '../../components/StartPageComponent/NavigationBarWrapper/Loadable';
import Registration from './../Registration/Loadable';
import UserSession from './../UserSession/Loadable';
import StartPage from './../StartPage/Loadable';
import EmployeeProfile from './../EmployeeProfile/Roles/AnonymousView/Loadable';
import Vacancy from './../Vacancy/Roles/AnonymousView/Loadable';
import EmployeesSearch from './../EmployeesSearch/Loadable';
import VacanciesSearch from './../VacanciesSearch/Loadable';
// import '../../assets/css/index.css';
const AnonymousMain = () => (
  <NavigationBarWrapper>
    <ToastContainer />
    <Switch>
      <Route path="/employee/search" component={EmployeesSearch} />
      <Route path="/vacancy/search" component={VacanciesSearch} />
      <Route path="/employee/:id" component={EmployeeProfile} />
      <Route path="/vacancy/:id" component={Vacancy} />
      <Route exact path="/login" component={UserSession} />
      <Route exact path="/registration" component={Registration} />
      <Route path="/" component={StartPage} />
    </Switch>
  </NavigationBarWrapper>
);
export default AnonymousMain;
