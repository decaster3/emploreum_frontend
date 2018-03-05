/**
*
* InputQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form/Loadable';

export const InputQuestion = (props) => {
  const { submittingQuestion, submitQuestion } = props;
  return (
    <Form
      submittingQuestion={submittingQuestion}
      submitQuestion={submitQuestion}
    />
  );
};

InputQuestion.propTypes = {
  submittingQuestion: PropTypes.bool,
  submitQuestion: PropTypes.func,
};

export default InputQuestion;
