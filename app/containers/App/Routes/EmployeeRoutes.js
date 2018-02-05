import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EmployeeMain from '../../EmployeeMain/Loadable';

export default [
   { path: '/', component: EmployeeMain },
]
