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
      { answer.is_true
        ? <i className="fa fa-check-square" style={{ color: 'green' }} aria-hidden="true" />
        : <i className="fa fa-minus-square" style={{ color: 'red' }} aria-hidden="true" />
      }
      {answer.name}
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
