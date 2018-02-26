/**
*
* Question
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion/Loadable';
import InputQuestion from '../InputQuestion/Loadable';

export const Question = (props) => {
  const { name, type, answers, submittingQuestion, submitQuestion, submitMultipleQuestion } = props;
  return (
    <div>
      <h3 >{name}</h3>
      {
        type === 'multipleChoice'
        ? <MultipleChoiceQuestion answers={answers} submittingQuestion={submittingQuestion} submitMultipleQuestion={submitMultipleQuestion} />
        : <InputQuestion submittingQuestion={submittingQuestion} submitQuestion={submitQuestion} />
      }
    </div>
  );
};

Question.propTypes = {
  name: PropTypes.string,
  submitQuestion: PropTypes.func,
  submitMultipleQuestion: PropTypes.func,
  submittingQuestion: PropTypes.bool,
  type: PropTypes.string,
  answers: PropTypes.array,
};

export default Question;
