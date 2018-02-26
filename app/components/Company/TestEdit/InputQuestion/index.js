/**
*
* MultipleChoiceQuestion
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const MultipleChoiceQuestion = (props) => {
  const { answer } = props;
  return (
    <div>
      <i className="fa fa-check-square" style={{ color: 'green', marginRight: '6px' }} aria-hidden="true" />
      {answer.name}
    </div>
  );
};

MultipleChoiceQuestion.propTypes = {
  answer: PropTypes.object,
};

export default MultipleChoiceQuestion;
