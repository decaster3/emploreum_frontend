/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TestEditWrapper = (props) => {
  const { children, name, testId } = props;

  return (
    <div className="panel panel-headline col-md-12 col-md-offset-0">
      <div className="panel-heading">
        <h3 className="panel-title">
          {name}
        </h3>
      </div>
      {children}
      <div className="padding-bottom-30 col-lg-12 text-right">
        <Link
          to={`${testId}/question/new/inputtype`}
          className="btn btn-success"
        >
          New input question
        </Link>
        <Link
          to={`${testId}/question/new/multiple`}
          className="btn btn-success"
        >
          New multiple question
        </Link>
      </div>
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
