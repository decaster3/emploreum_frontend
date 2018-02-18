/**
*
* Notifications
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Notifications = (props) => (
  <li className="dropdown">
    <a href="" className="dropdown-toggle icon-menu" data-toggle="dropdown">
      <i className="fa fa-bell-o"></i>
      { props.notificationsCount > 0
        ? <span className="badge bg-danger">{props.notificationsCount}</span>
        : <div />
      }
    </a>
    <ul className="dropdown-menu notifications">
      {props.children}
    </ul>
  </li>
  );

Notifications.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  notificationsCount: PropTypes.number,
};

export default Notifications;
