/**
*
* NoPayments
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoPayments = () => (
  <div className="col-md-6">
    <div className="panel">
      <div className="panel-body">
        <h4 className="text-center">
          You have{'\''}t got payments yet.
        </h4>
        <hr />
        <div className="text-center">
        Here you will see the payments to your employees.
        </div>
      </div>
    </div>
  </div>
);

NoPayments.propTypes = {
  contractType: PropTypes.string,
};

export default NoPayments;
