import StartPage from '../../StartPage/Loadable';
import Registration from '../../Registration/Loadable';
import UserSession from '../../UserSession/Loadable';
import { EmployeeMain } from '../../EmployeeMain';
import { CompanyMain } from '../../CompanyMain';

export default [
   { path: '/', component: StartPage },
   { path: '/registration', component: Registration },
   { path: '/login', component: UserSession },
   { path: '/employee', component: EmployeeMain, notExact: true },
   { path: '/company', component: CompanyMain, notExact: true },
];
