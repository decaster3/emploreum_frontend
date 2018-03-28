/**
*
* EmployeeFilterSelector
*
*/

import React from 'react';
import KeywordFilter from '../../../../containers/Filters/Keywords/Loadable';
import LanguageFilter from '../../../../containers/Filters/Languages/Loadable';
import SkillsFilter from '../../../../containers/Filters/Skills/Loadable';
import LevelFilter from '../../../../containers/Filters/Level/Loadable';

export const EmployeeFilterSelector = () => (
  <div>
    <KeywordFilter classes={['col-md-3']} />
    <LanguageFilter classes={['class1', 'class2']} />
    <SkillsFilter classes={['class1', 'class2']} />
    <LevelFilter classes={['class1', 'class2']} />
  </div>
);

export default EmployeeFilterSelector;
