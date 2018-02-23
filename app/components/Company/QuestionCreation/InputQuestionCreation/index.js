/**
*
* TestCreation
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FormInputQuestionCreation from './Form/Loadable';

class InputQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Question
          </h3>
        </div>
        <FormInputQuestionCreation
          submittingInputQuestionCreationButtonState={this.props.submittingInputQuestionCreationButtonState}
          submitInputQuestion={this.props.submitInputQuestion}
        />
      </div>
    );
  }
}

InputQuestionCreation.propTypes = {
  submitInputQuestion: PropTypes.func.isRequired,
  submittingInputQuestionCreationButtonState: PropTypes.bool.isRequired,
};

export default InputQuestionCreation;
