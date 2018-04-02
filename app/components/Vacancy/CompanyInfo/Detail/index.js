/**
*
* Detail
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Detail = (props) => {
  const { mainInfo } = props;
  return (
    <div className="profile-detail" id="sticky-social">
      <div className="profile-info">
        <h4 className="heading">Vacancy information</h4>
        <ul className="list-unstyled list-justify">
          <li>Salary <span>{mainInfo.weekPayment} eth</span></li>
          <li>Duration<span>{mainInfo.duration} month(s)</span></li>
        </ul>
        <h4 className="heading padding-top-30">About company</h4>
        <div className="com-desc">
          {mainInfo.company.about}
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  mainInfo: PropTypes.object,
};

export default Detail;
