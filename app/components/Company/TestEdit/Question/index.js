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
    <div className="col-md-4">
      <div className="panel">
        <div className="panel-heading">
          <h4 className="panel-title">
            {question.type === 'multipleChoice'
              ? <span>Multiple choice question</span>
              : <span>Input question</span>
            }
          </h4>
          <h3 className="panel-title">{question.name}</h3>
          <hr />
        </div>
        <div className="panel-body" style={{ display: 'block' }} >
          {
            question.type === 'multipleChoice'
            ? <MultipleChoiceQuestion answers={question.answers} />
            : <InputQuestion answer={question.answers[0]} />
          }
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.object,
};

export default Question;
