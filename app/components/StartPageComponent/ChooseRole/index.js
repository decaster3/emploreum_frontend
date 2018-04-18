/**
*
* ChooseRole
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import VacanciesSearchLink from '../../../containers/VacanciesSearch/preload';
import EmployeesSearchLink from '../../../containers/EmployeesSearch/preload';

function ChooseRole() {
  return (
    <div className="col-xs-12 no-padding" id="for">
      <div className="dark-background"></div>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <div className="col-sm-6 find-item">
            <h1>Employee</h1>
            <VacanciesSearchLink url="/vacancy/search/">
              <button className="btn btn-primary">Find job</button>
            </VacanciesSearchLink>
            <div className="border"></div>
          </div>
          <div className="col-sm-6 find-item">
            <h1>Company</h1>
            <EmployeesSearchLink url="/employee/search/">
              <button className="btn btn-primary">Find employee</button>
            </EmployeesSearchLink>
          </div>
        </div>
      </div>
    </div>
  );
}

ChooseRole.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default ChooseRole;
