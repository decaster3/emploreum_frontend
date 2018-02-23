/**
*
* Employee
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
export const Employee = (props) => {
  const {
    profile,
    companyName,
    description,
    name,
    contractDuration,
    id } = props;


  const url = `/company/employee/${id}`;
  return (
    <div className="vacancy">
      <div className="vacancy-name">
        <a href="">{ profile }</a>
        <div className="vacancy-currency">
          <p><a href="">{ companyName }</a></p>
          <div className="clearfix"></div>
          {name}
        </div>
      </div>
      <div className="vacancy-desc">
        <p> { description } </p>
        <div className="vacancy-add">
          <Link to={url}>Details</Link>
        </div>
        <div className="vacancy-contact">
          <a href="">Contacts</a>
        </div>
        <div className="vacancy-date">
          { contractDuration }
        </div>
      </div>
    </div>
  );
};
//
Employee.propTypes = {
  contractDuration: PropTypes.string,
  name: PropTypes.string,
  profile: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
  id: PropTypes.string,
};

export default Employee;
