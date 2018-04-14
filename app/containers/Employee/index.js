import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AccountWrapperContainer from '../AccountWrapper';
import EmployeeProfile from '../EmployeeProfile/Roles/SelfView/Loadable';
import ChatCreator from '../Chat/Loadable';

function renderMenu() {
  return [{
    name: 'Profile',
    url: '/user',
    icon: 'fa-user',
  }, {
    name: 'Chat',
    url: '/user/chat/',
    icon: 'fa-comments',
  }];
}


export const EmployeeMain = () => (
  <AccountWrapperContainer menu={renderMenu()}>
    <ToastContainer />
    <Switch>
      <Route exact path="/user" component={EmployeeProfile} />
      <Route path="/user/chat/:chatId?/" component={ChatCreator} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
