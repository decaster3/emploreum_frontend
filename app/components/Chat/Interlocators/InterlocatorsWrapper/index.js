/**
*
* InterlocatorsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const InterlocatorsWrapper = (props) => {
  const { children } = props;
  return (
    <div className="col-md-3">
      <div className="users-list">
        {children}
      </div>
    </div>
  );
};

InterlocatorsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default InterlocatorsWrapper;
