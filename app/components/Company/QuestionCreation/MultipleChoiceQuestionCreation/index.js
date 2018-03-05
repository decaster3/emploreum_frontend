/**
*
* TestCreation
*
*/

import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import FormMultipleQuestionCreation from './Form/Loadable';

class MultipleQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: 5 };
  }
  render() {
    return (
      <div className="panel panel-headline col-md-8 col-md-offset-2">
        <div className="panel-heading">
          <h3 className="panel-title">
            Create Multiple Choice Question
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
          <FormMultipleQuestionCreation
            submittingMultipleQuestionCreation={this.props.submittingMultipleQuestionCreation}
            submitMultipleQuestion={this.props.submitMultipleQuestion}
            difficulty={this.state.value}
          />
        </div>
      </div>
    );
  }
}

MultipleQuestionCreation.propTypes = {
  submitMultipleQuestion: PropTypes.func.isRequired,
  submittingMultipleQuestionCreation: PropTypes.bool.isRequired,
};

export default MultipleQuestionCreation;
