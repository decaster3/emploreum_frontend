/**
*
* NoOpenVacancies
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoOpenVacancies = () => (
  <div>
    <h4 className="text-center">
      No open vacancies
    </h4>
  </div>
);

NoOpenVacancies.propTypes = {
  contractType: PropTypes.string,
};

export default NoOpenVacancies;
