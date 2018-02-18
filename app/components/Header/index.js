/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Search from './Search/Loadable';
import Navigation from './Navigation/Loadable';
import Language from './Language/Loadable';

export const Header = (props) => {
  const { serverLogout, children } = props;
  return (
    <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="brand">
        <Link to="/">Emploreum</Link>
      </div>
      <div className="container-fluid">
        <div className="navbar-btn hidden-xs">
          <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
        </div>
        <Search />
        <div id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            {children}
            <Navigation
              serverLogout={serverLogout}
            />
            <Language />
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  serverLogout: PropTypes.func,
};

export default Header;
