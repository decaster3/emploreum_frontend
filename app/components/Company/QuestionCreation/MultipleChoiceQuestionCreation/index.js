/**
*
* TestCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FormMultipleQuestionCreation from './Form/Loadable';

class MultipleQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Multiple Choice Question
          </h3>
        </div>
        <FormMultipleQuestionCreation
          submittingMultipleQuestionCreation={this.props.submittingMultipleQuestionCreation}
          submitMultipleQuestion={this.props.submitMultipleQuestion}
        />
      </div>
    );
  }
}

MultipleQuestionCreation.propTypes = {
  submitMultipleQuestion: PropTypes.func.isRequired,
  submittingMultipleQuestionCreation: PropTypes.bool.isRequired,
};

export default MultipleQuestionCreation;
