/**
*
* EnrollVacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Continue = (props) => {
  const { vacancyId } = props;
  return (
    <div className="text-center padding-top-30">
      You can continue test.
      <Link
        to={`/employee/vacancy/${vacancyId}/test/`}
        className="btn btn-success"
      >
        Continue test
      </Link>
    </div>
  );
};

Continue.propTypes = {
  vacancyId: PropTypes.string,
};


export default Continue;
