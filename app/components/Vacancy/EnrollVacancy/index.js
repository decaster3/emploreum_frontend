/**
*
* EnrollVacancy
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
// import styled from 'styled-components';


export const EnrollVacancy = (props) => {
  const { vacancyId, enrollVacancy, loading } = props;
  return (
    <div className="text-center padding-top-30">
      <button
        onClick={() => enrollVacancy(vacancyId)}
        className="btn btn-success"
        disabled={loading}
      >
        { loading
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Откликнуться</span>
        }
      </button>
    </div>
  );
};

EnrollVacancy.propTypes = {
  vacancyId: PropTypes.string,
  enrollVacancy: PropTypes.func,
  loading: PropTypes.bool,
};


export default EnrollVacancy;
