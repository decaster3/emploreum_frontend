/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const WorkingEmployee = (props) => {
  const { avatar, name, position, workedTime } = props;

  return (
    <li>
      <img src={avatar} alt="Avatar" className="img-circle pull-left avatar" />
      <div>
        <a href="javascript:void(0)">{name}</a>
        <p>
          <a href="javascript:void(0)">{position}</a>
        </p>
        <p>
          <span className="timestamp">{workedTime}</span>
        </p>
      </div>
    </li>
  );
};

WorkingEmployee.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  workedTime: PropTypes.string.isRequired,
};

export default WorkingEmployee;
