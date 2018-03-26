import Registration from '../../Registration/Loadable';
import UserSession from '../../UserSession/Loadable';
import StartPage from '../../StartPage/Loadable';

export default [
   { path: '/', component: StartPage, exact: true },
   { path: '/login', component: UserSession, exact: true },
   { path: '/registration', component: Registration, exact: true },
];
