/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TestEditWrapper = (props) => {
  const { children, name, testId } = props;

  return (
    <div>
      {name}
      {children}
      <Link to={`${testId}/question/new/inputtype`}>New input question</Link>
      <Link to={`${testId}/question/new/multiple`}>New multiple question</Link>
    </div>
  );
};

TestEditWrapper.propTypes = {
  testId: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TestEditWrapper;
