/* eslint no-script-url: 0 */

import React from 'react';
import VacancyCreationLink from '../../../../containers/Company/VacancyCreation/preload';

export const VacancyCreationButton = () => (
  <div className="panel-footer">
    <div className="row">
      <div className="col-md-12 text-right">
        <VacancyCreationLink url={'/company/vacancy/create'} className="btn btn-success">New vacancy</VacancyCreationLink>
      </div>
    </div>
  </div>
);

export default VacancyCreationButton;
