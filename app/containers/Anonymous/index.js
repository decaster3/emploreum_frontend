import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
import NavigationBarWrapper from '../../components/StartPageComponent/NavigationBarWrapper/Loadable';
import Registration from '../Registration/Loadable';
// import UserSession from './../UserSession/Loadable';
// <Route exact path="/" component={UserSession} />

const AnonymousMain = () => (
  <NavigationBarWrapper>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Registration} />
    </Switch>
  </NavigationBarWrapper>
);
export default AnonymousMain;
