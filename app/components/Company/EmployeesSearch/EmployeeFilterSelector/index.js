/**
*
* EmployeeFilterSelector
*
*/

import React from 'react';
import KeywordFilter from '../../../../containers/Filters/Keywords';
// import LanguageFilter from '../../../../containers/Filters/Languages';
// import SkillsFilter from '../../../../containers/Filters/Skills';
import { getEmployees } from '../../../../containers/EmployeesSearch/actions';

export const EmployeeFilterSelector = () => (
  <div className="row">
    <KeywordFilter reload={getEmployees} classes={['col-md-4']} />
    {/* <LanguageFilter reload={getEmployees} classes={['col-md-4']} /> */}
    {/* <SkillsFilter reload={getEmployees} classes={['col-md-4']} /> */}
  </div>
);

export default EmployeeFilterSelector;
