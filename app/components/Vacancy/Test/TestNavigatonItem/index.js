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
  const addedClass = () => {
    if (current) {
      return 'btn-warning';
    }
    if (question.viewed) {
      return 'btn-success';
    }
    return 'btn-default';
  };
  return (
    <Link
      to={questionUrl}
      className={`btn ${addedClass()}`}
      onClick={() => changeCurrentQuestion(question)}
    >
      {question.viewId}
    </Link>
  );
};


TestNavigationItem.propTypes = {
  question: PropTypes.object,
  changeCurrentQuestion: PropTypes.func,
  current: PropTypes.bool,
};

export default TestNavigationItem;
