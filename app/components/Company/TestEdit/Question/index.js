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
  const { question } = props;
  return (
    <div>
      {question.name}
      {question.type}
      {
        question.type === 'multipleChoice'
        ? <MultipleChoiceQuestion answers={question.answers} />
        : <InputQuestion answer={question.answers[0]} />
      }
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
