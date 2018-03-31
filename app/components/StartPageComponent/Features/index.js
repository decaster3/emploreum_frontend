/**
*
* Features
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';

function Features() {
  return (
    <div className="text-jastify col-xs-12 col-md-10 col-md-offset-1" id="info">
      <h1>Who we are</h1>
       Emploreum is a bridge between IT companies and specialists.Emploreum is a
       decentralized labor exchange where all contracts between employee and employer
       are made through Ethereum blockchain. A professional experience, education, current
       level of knowledge in certain areas of IT is a cv-token of the employees which are
       used to evaluate and rank them. Employees have a rating which is an indicator of the
       quality of their work. At the same time, companies also have a rating reflecting the
       level of the company. With the quality of maintenance of companies and employees, the
       System is able to determine the cost per hour of employee{'\''}s work.
    </div>
  );
}

Features.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default Features;
