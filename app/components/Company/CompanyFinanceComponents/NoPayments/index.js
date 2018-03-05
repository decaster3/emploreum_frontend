/**
*
* NoPayments
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoPayments = () => (
  <div className="col-md-12">
    <div className="panel">
      <h4 className="text-center">
        You have{'\''}t got payments yet.
      </h4>
      <hr style={{ marginTop: '3px', marginBottom: '3px' }} />
      <div className="text-center">
      Here you will see the payments to your employees.
      </div>
    </div>
  </div>
);

NoPayments.propTypes = {
  contractType: PropTypes.string,
};

export default NoPayments;
