/**
*
* NoOpenVacancies
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoOpenVacancies = () => (
  <div className="col-md-12">
    <div className="panel">
      <h4 className="text-center">
        You have{'\''}t got open vacancies yet.
      </h4>
      <hr style={{ marginTop: '3px', marginBottom: '3px' }} />
      <div className="text-center">
        Here you will find open vacancies, on them you can call employees.
      </div>
    </div>
  </div>
);

NoOpenVacancies.propTypes = {
  contractType: PropTypes.string,
};

export default NoOpenVacancies;
