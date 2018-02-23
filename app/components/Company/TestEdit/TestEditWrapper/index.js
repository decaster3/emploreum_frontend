/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const TestEditWrapper = (props) => {
  const { children, name } = props;

  return (
    <div>
      {name}
      {children}
    </div>
  );
};

TestEditWrapper.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TestEditWrapper;
