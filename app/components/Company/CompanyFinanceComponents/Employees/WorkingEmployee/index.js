/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../../../../global-constants';

export const WorkingEmployee = (props) => {
  const { photoPath, name, position, workedTime, employeeId } = props;
  const urlProfile = `/company/employee/${employeeId}`;
  const imgProfile = `${BASEURL}/${photoPath}`;
  return (
    <li>
      <img src={imgProfile} alt="photoPath" className="img-circle pull-left avatar" />
      <div>
        <Link to={urlProfile}>{name}</Link>
        <p>
          <Link to={urlProfile}>{position}</Link>
        </p>
        <p>
          <span className="timestamp">{workedTime}</span>
        </p>
      </div>
    </li>
  );
};

WorkingEmployee.propTypes = {
  photoPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  workedTime: PropTypes.string.isRequired,
};

export default WorkingEmployee;
