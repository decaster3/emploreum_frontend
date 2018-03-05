/**
*
* MultipleChoiceQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export const MultipleChoiceQuestion = (props) => {
  const { answers, submitQuestion } = props;
  return (
    <Form
      submitQuestion={submitQuestion}
      answers={answers}
    />
  );
};

MultipleChoiceQuestion.propTypes = {
  answers: PropTypes.array,
  submitQuestion: PropTypes.func,
};

export default MultipleChoiceQuestion;
