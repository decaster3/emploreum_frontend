/**
*
* TestCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FormTestCreation from './Form/Loadable';

class TestCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Test
          </h3>
        </div>
        {this.props.specificationSkills}
        <FormTestCreation
          submittingTestCreationButtonState={this.props.submittingTestCreationButtonState}
          createTest={this.props.createTest}
        />
      </div>
    );
  }
}

TestCreation.propTypes = {
  specificationSkills: PropTypes.object,
  createTest: PropTypes.func,
  submittingTestCreationButtonState: PropTypes.bool,
};

export default TestCreation;
