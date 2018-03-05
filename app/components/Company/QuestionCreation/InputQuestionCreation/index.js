/**
*
* TestCreation
*
*/

import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import FormInputQuestionCreation from './Form/Loadable';

class InputQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: 5 };
  }

  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Question
          </h3>
        </div>
        <div className="panel-body">
          Choose difficulty: {this.state.value}
          <p>
            <Rating
              {...this.props}
              initialRating={this.state.value}
              stop={10}
              onChange={(value) => this.setState({ value })}
            />
          </p>
          <FormInputQuestionCreation
            submittingInputQuestionCreationButtonState={this.props.submittingInputQuestionCreationButtonState}
            submitInputQuestion={this.props.submitInputQuestion}
            difficulty={this.state.value}
          />
        </div>
      </div>
    );
  }
}

InputQuestionCreation.propTypes = {
  submitInputQuestion: PropTypes.func.isRequired,
  submittingInputQuestionCreationButtonState: PropTypes.bool.isRequired,
};

export default InputQuestionCreation;
