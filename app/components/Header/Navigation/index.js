/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../global-constants';
export const Navigation = (props) => {
  const { userInitials } = props;
  const photoPath = `${BASEURL}/${userInitials.photoPath}`;
  return (
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <img src={photoPath} className="img-circle" alt="Avatar" />
        <span>{ userInitials.name }</span>
        <i className="icon-submenu fa fa-angle-down"></i></a>
      <ul className="dropdown-menu">
        <li onClick={() => props.serverLogout()}><i className="fa fa-sign-out"></i> <span>Выход</span></li>
      </ul>
    </li>
  );
};

Navigation.propTypes = {
  serverLogout: PropTypes.func,
  userInitials: PropTypes.object,
};

export default Navigation;
