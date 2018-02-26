/**
*
* TestCard
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TestNavigationItem = (props) => {
  const { current, question, changeCurrentQuestion } = props;
  const questionUrl = `${question.id}`;
  return (
    <div>
      {
        question.viewed
        ? <span onClick={() => changeCurrentQuestion(question)}><Link type="button" className="btn-toggle-collapse" to={questionUrl}>Viwed, {question.viewId}, current:{String(current)}</Link></span>
        : <span onClick={() => changeCurrentQuestion(question)}><Link type="button" className="btn-toggle-collapse" to={questionUrl}>Not viewed, {question.viewId}, current:{String(current)}</Link></span>
      }
    </div>
  );
};


TestNavigationItem.propTypes = {
  question: PropTypes.object,
  changeCurrentQuestion: PropTypes.func,
  current: PropTypes.bool,
};

export default TestNavigationItem;
