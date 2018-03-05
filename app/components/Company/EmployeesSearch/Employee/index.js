/**
*
* Employee
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../../../global-constants';

export const Employee = (props) => {
  const {
    specifications,
    image,
    skills,
    lastWork,
    name,
    id } = props;


  const url = `/company/employee/${id}`;
  return (
    <div className="vacancy">
      <div className="row">
        <div className="inline col-md-2">
          <a className="thumbnail">
            <img src={BASEURL + image} alt="user avatar" />
          </a>
          <h4>{name}</h4>
        </div>
        <div className="col-md-10">
          <div className="vacancy-name">
            <a > { specifications || 'Profiles...'}</a>
            <div className="vacancy-currency">
              <p><a>{skills || 'Skils...'} </a></p>
              <div className="clearfix"></div>
              {lastWork || 'last work...'}
            </div>
          </div>
        </div>
      </div>
      <div className="vacancy-desc">
        <p>  Work experience: 8 years </p>
        <div className="vacancy-add">
          <Link to={url}>Details</Link>
        </div>
        <div className="vacancy-contact">
          <a href="">Contacts</a>
        </div>
        <div className="vacancy-date">
          On emploreum since: 2014 (4 years)
        </div>
      </div>
    </div>
  );
};
//
Employee.propTypes = {
  specifications: PropTypes.string,
  lastWork: PropTypes.string,
  skills: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Employee;
