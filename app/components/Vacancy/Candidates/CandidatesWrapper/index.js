/**
*
* CandidatesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const CandidatesWrapper = (props) => {
  const { children } = props;
  return (
    <div className="table-responsive">
      <h4 className="heading">Candidates</h4>
      <table className="table project-table">
        <thead>
          <tr>
            <th>Employees</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

CandidatesWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CandidatesWrapper;
