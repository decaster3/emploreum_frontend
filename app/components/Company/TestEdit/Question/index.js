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
    <div className="panel">
      <div className="panel-body" style={{ display: 'block' }} >
        <h3>{question.name}</h3>
        <small>
          {question.type === 'multipleChoice'
            ? <span>Multiple choice question</span>
            : <span>Input question</span>
          }
        </small>
        <hr />
        {
          question.type === 'multipleChoice'
          ? <MultipleChoiceQuestion answers={question.answers} />
          : <InputQuestion answer={question.answers[0]} />
        }
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
