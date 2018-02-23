/**
*
* MultipleChoiceQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
//   {
//     id: 2,
//     name: '2-1?',
//     type: 'input',
//     answers: [{
//       id: 1,
//       isTrue: true,
//       aswer: 1,
//     }],
//   },

export const MultipleChoiceQuestion = (props) => {
  const { answer } = props;
  return (
    <div>
      answer: {answer.answer}
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  answer: PropTypes.object,
};

export default MultipleChoiceQuestion;
