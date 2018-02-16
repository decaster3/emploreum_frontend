/**
*
* Notification
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const { message } = props;
  return (
    <li>
      <a href="" className="notification-item">
        <span className="dot bg-danger" />
        {message}
      </a>
    </li>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
