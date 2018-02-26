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
    <div className="col-md-4">
      <div className="panel">
        <div className="panel-heading">
          <h2 className="panel-title">{ name }</h2>
          <div className="right">
            <Link className="btn btn-default" to={questionUrl}> Edit Test </Link>
          </div>
        </div>
        <div className="panel-body">
          <p>Question count is { questionsCount }</p>
        </div>
      </div>
    </div>
  );
};


TestCard.propTypes = {
  name: PropTypes.string,
  questionsCount: PropTypes.number,
  id: PropTypes.string,
};

export default TestCard;
