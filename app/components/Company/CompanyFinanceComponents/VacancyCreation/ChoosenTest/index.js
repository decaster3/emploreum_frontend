/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const ChoosenTest = (props) => {
  const { test } = props;
  return (
    <div>
      {test && test.name
        ? <p>{test.name}</p>
        : <p>Choose test</p>
      }
    </div>
  );
};

ChoosenTest.propTypes = {
  test: PropTypes.object,
};

export default ChoosenTest;
