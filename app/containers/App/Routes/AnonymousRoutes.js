import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../../StartPage/Loadable';
import Registration from '../../Registration/Loadable';
import UserSession from '../../UserSession/Loadable';

export default [
   { path: '/', component: StartPage },
   { path: '/registration', component: Registration },
   { path: '/login', component: UserSession },
]
