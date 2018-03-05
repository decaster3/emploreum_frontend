/**
*
* EnrollVacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Start = (props) => {
  const { vacancyId } = props;
  return (
    <div className="text-center padding-top-30 padding-bottom-30">
      <h4 className="col-lg-12 text-left">You need to pass test</h4>
      <hr />
      <Link
        to={`/employee/vacancy/${vacancyId}/preview/test`}
        className="btn btn-success"
      >
        Pass test
      </Link>
    </div>
  );
};

Start.propTypes = {
  vacancyId: PropTypes.string,
};


export default Start;
