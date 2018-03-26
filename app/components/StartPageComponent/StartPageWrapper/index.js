/**
*
* StartPageWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const StartPageWrapper = (props) => {
  const { children } = props;
  return (
    <div id="wrapper">
      {children}
    </div>
  );
};

StartPageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default StartPageWrapper;
