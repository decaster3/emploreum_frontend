/**
*
* TestCard
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TestCard = (props) => {
  const { name, questionsCount, id } = props;
  const questionUrl = `/company/tests/${id}`;
  return (
    <div>
      { name }
      { questionsCount }
      <Link to={questionUrl}> Link </Link>
    </div>
  );
};

TestCard.propTypes = {
  name: PropTypes.string,
  questionsCount: PropTypes.number,
  id: PropTypes.number,
};

export default TestCard;
