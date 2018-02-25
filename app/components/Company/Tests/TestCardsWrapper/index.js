/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const TestCardsWrapper = (props) => {
  const { children } = props;
  return (
    <div className="panel panel-headline col-md-12 col-md-offset-0">
      <div className="panel-heading">
        <h3 className="panel-title">
          My Tests
        </h3>
      </div>
      {children}
    </div>
  );
};

TestCardsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TestCardsWrapper;
