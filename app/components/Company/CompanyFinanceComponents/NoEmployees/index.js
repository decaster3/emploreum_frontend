/**
*
* NoEmployees
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoEmployees = () => (
  <div className="col-md-6">
    <div className="panel">
      <div className="panel-body">
        <h4 className="text-center">
          You have{'\''}t got employees yet.
        </h4>
        <hr />
        <div className="text-center">
          Here you will see your employees
        </div>
      </div>
    </div>
  </div>
);

NoEmployees.propTypes = {
  contractType: PropTypes.string,
};

export default NoEmployees;
