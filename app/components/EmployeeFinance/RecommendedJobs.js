import React from 'react';
import PropTypes from 'prop-types';

export const RecommendedJobs = (props) => {
  const { address, company, salary, startDay, endDay } = props;

  return (
    <tr>
    dsf
    </tr>
  );
};

RecommendedJobs.propTypes = {
  address: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  startDay: PropTypes.string.isRequired,
  endDay: PropTypes.string.isRequired,
};
