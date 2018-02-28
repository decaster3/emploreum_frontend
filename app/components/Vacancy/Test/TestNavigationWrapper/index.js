/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const TestNavigationWrapper = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

TestNavigationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TestNavigationWrapper;
