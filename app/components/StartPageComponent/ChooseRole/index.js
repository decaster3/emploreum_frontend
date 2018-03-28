/**
*
* ChooseRole
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ChooseRole() {
  return (
    <div className="col-xs-12 no-padding" id="for">
      <div className="dark-background"></div>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <div className="col-sm-6 find-item">
            <h1>Employee</h1>
            <Link to="/vacancy/search">
              <button className="btn btn-primary">Find job</button>
            </Link>
            <div className="border"></div>
          </div>
          <div className="col-sm-6 find-item">
            <h1>Company</h1>
            <Link to="/employee/search">
              <button className="btn btn-primary">Find employee</button>
            </Link>
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
