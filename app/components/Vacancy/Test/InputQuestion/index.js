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
    <div>
      <Form
        submittingQuestion={submittingQuestion}
        submitQuestion={submitQuestion}
      />
    </div>
  );
};

InputQuestion.propTypes = {
  submittingQuestion: PropTypes.bool,
  submitQuestion: PropTypes.func,
};

export default InputQuestion;
