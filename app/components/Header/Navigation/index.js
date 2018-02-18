/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Navigation = (props) => (
  <li className="dropdown">
    <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      <img src="/avatar.jpeg" className="img-circle" alt="Avatar" />
      <span>Магомедов Михаил</span>
      <i className="icon-submenu fa fa-angle-down"></i></a>
    <ul className="dropdown-menu">
      <li><a onClick={() => props.serverLogout()} href="" ><i className="fa fa-sign-out"></i> <span>Выход</span></a></li>
    </ul>
  </li>
);

Navigation.propTypes = {
  serverLogout: PropTypes.func,
};

export default Navigation;
