/* eslint no-script-url: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
export const VacancyCreationButton = () => (
  <div className="panel-footer">
    <div className="row">
      <div className="col-md-12 text-right">
        <Link to="vacancy/create" className="btn btn-success">New vacancy</Link>
      </div>
    </div>
  </div>
);

export default VacancyCreationButton;
