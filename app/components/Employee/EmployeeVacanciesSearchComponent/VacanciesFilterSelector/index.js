/**
*
* VacanciesFilterSelector
*
*/

import React from 'react';
import KeywordFilter from '../../../../containers/Filters/Keywords';
import LanguageFilter from '../../../../containers/Filters/Languages';
import SkillsFilter from '../../../../containers/Filters/Skills';
import { getVacancies } from '../../../../containers/VacanciesSearch/actions';

export const VacanciesFilterSelector = () => (
  <div className="row">
    <KeywordFilter reload={getVacancies} classes={['col-md-4']} />
    <LanguageFilter reload={getVacancies} classes={['col-md-4']} />
    <SkillsFilter reload={getVacancies} classes={['col-md-4']} />
  </div>
);

export default VacanciesFilterSelector;
