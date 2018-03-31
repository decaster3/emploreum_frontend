/**
*
* Features
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';
import Rating from '../../../assets/img/rating.png';
import Time from '../../../assets/img/time.png';
import LongRelation from '../../../assets/img/long.png';
import Contract from '../../../assets/img/smartcon.png';
import Garantie from '../../../assets/img/garantie.png';
import Dispute from '../../../assets/img/spor.png';
import Education from '../../../assets/img/education.png';
function Features() {
  return (
    <div className="col-xs-12 col-md-10 col-md-offset-1" id="plus">
      <hr />
      <h1>Our advantages for company</h1>
      <div className="row">
        <div className="col-md-3 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Rating} className="img-responsive" />
          </div>
          <p>Objectively assess the knowledge, qualifications and experience of employees based on our rating.</p>
        </div>
        <div className="col-md-3 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Time} className="img-responsive" />
          </div>
          <p>Find employees without losing time for interviews, reviewing feedback, etc .</p>

        </div>
        <div className="col-md-3 plus-item">
          <div className="icon-container">
            <img alt="feature" src={LongRelation} className="img-responsive" />
          </div>
          <p>Form a long-term relationship with employees.</p>
        </div>
        <div className="col-md-3 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Contract} className="img-responsive" />
          </div>
          <p>Do all transactions in transparent way because they based on smart contracts.</p>
        </div>
      </div>
      <h1>Our advantages for employee</h1>
      <div className="row">
        <div className="col-md-4 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Garantie} className="img-responsive" />
          </div>
          <p>Guarantee of timely payment of works due to conditions and requirements established by a smart contract.</p>
        </div>
        <div className="col-md-4 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Dispute} className="img-responsive" />
          </div>
          <p>Independent examination of their work in case of disagreement with the customer.</p>

        </div>
        <div className="col-md-4 plus-item">
          <div className="icon-container">
            <img alt="feature" src={Education} className="img-responsive" />
          </div>
          <p>All work experience is stored in blockchain and forms an objective and independent rating confirming the qualification and experience.</p>
        </div>
      </div>
    </div>
  );
}

Features.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default Features;
