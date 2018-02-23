/**
*
* MultipleChoiceQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const MultipleChoiceQuestion = (props) => {
  const { answers } = props;
  const answersView = answers.map((answer) => (
    <div key={answer.id}>
      answer: {answer.answer}
      {String(answer.isTrue)}
    </div>
  ));
  return (
    <div>
      {answersView}
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  answers: PropTypes.array,
};

export default MultipleChoiceQuestion;
