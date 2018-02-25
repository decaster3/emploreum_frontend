/**
*
* Candidate
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


export const OpenVacancy = (props) => {
  const { vacancy, inviteEmployee, employeeId } = props;
  return (
    <li>
      <div>
        <span className="title">{ vacancy.position }</span>
        <span className="short-description">{ vacancy.hoursPerWeek }</span>
        <span className="date">{ vacancy.payment }</span>
        <div className="text-right">
          <button
            className="btn btn-success"
            data-dismiss="modal"
            onClick={() => inviteEmployee(vacancy.id, employeeId)}
          >
            Invite
          </button>
        </div>
      </div>
    </li>
  );
};

OpenVacancy.propTypes = {
  vacancy: PropTypes.object,
  inviteEmployee: PropTypes.func,
  employeeId: PropTypes.string,
};

export default OpenVacancy;
