/**
*
* EmployeeFilterSelector
*
*/

import React from 'react';
import KeywordFilter from '../../../../containers/Filters/Keywords';
import LanguageFilter from '../../../../containers/Filters/Languages';
import SkillsFilter from '../../../../containers/Filters/Skills';

export const EmployeeFilterSelector = () => (
  <div className="row">
    <KeywordFilter classes={['col-md-4']} />
    <LanguageFilter classes={['col-md-4']} />
    <SkillsFilter classes={['col-md-4']} />
  </div>
);

export default EmployeeFilterSelector;
