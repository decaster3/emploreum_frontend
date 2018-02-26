/**
*
* TestMain
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import TestCardsWrapper from '../TestCardsWrapper/index';
import AddTestButton from '../AddTestButton/Loadable';

export const TestMain = (props) => {
  const { testCards } = props;
  return (
    <div>
      <TestCardsWrapper>
        {testCards}
        <AddTestButton />
      </TestCardsWrapper>
    </div>
  );
};

TestMain.propTypes = {
  testCards: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default TestMain;
