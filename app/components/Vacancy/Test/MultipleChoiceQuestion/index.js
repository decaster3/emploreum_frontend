/**
*
* MultipleChoiceQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export const MultipleChoiceQuestion = (props) => {
  const { answers, submitMultipleQuestion, submitQuestion } = props;
  return (
    <div>
      <Form
        submitMultipleQuestion={submitMultipleQuestion}
        submitQuestion={submitQuestion}
        answers={answers}
      />
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  answers: PropTypes.array,
  submitMultipleQuestion: PropTypes.func,
  submitQuestion: PropTypes.bool,
};

export default MultipleChoiceQuestion;
