import EmployeeMain from '../../Employee/';

export default [
   { path: '/employee', component: EmployeeMain, exact: false },
   { path: '/', component: EmployeeMain, exact: false },
];
