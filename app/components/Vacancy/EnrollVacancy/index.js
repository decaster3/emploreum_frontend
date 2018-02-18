/**
*
* EnrollVacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


export const EnrollVacancy = (props) => {
  const { vacancyId, enrollVacancy } = props;
  return (
    <div className="text-center padding-top-30">
      <button
        onClick={() => enrollVacancy(vacancyId)}
        className="btn btn-success"
        data-toggle="modal"
        data-target="#profile-settings"
      >
        Откликнуться
      </button>
    </div>
  );
};

EnrollVacancy.propTypes = {
  vacancyId: PropTypes.string,
  enrollVacancy: PropTypes.func,
};


export default EnrollVacancy;
