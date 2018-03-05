/**
*
* Notification
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const { text } = props;
  return (
    <li>
      <a href="" className="notification-item">
        <span className="dot bg-danger" />
        {text}
      </a>
    </li>
  );
};

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
