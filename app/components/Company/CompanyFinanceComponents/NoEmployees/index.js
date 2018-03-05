/**
*
* NoEmployees
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoEmployees = () => (
  <div className="col-md-5">
    <div className="panel">
      <h4 className="text-center">
        You have{'\''}t got employees yet.
      </h4>
      <hr />
      <div className="text-center">
        <h5>Here you will see your employees</h5>
      </div>
    </div>
  </div>
);

NoEmployees.propTypes = {
  contractType: PropTypes.string,
};

export default NoEmployees;
