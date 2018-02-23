/**
*
* TestCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TestEditWrapper from './TestEditWrapper/Loadable';

class TestEditMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TestEditWrapper name={this.props.testInfo.name} testId={this.props.testId}>
        { this.props.questions }
      </TestEditWrapper>
    );
  }
}

TestEditMain.propTypes = {
  testId: PropTypes.string,
  questions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  testInfo: PropTypes.object,
};

export default TestEditMain;
