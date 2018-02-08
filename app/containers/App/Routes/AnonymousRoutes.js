import Registration from '../../Registration/Loadable';
import UserSession from '../../UserSession/Loadable';

export default [
   { path: '/', component: UserSession, exact: true },
   { path: '/registration', component: Registration, exact: true },
];
