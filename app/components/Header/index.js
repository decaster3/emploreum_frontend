/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Loadable';
import Language from './Language/Loadable';

export const Header = (props) => {
  const { serverLogout, children, userInitials } = props;
  return (
    <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="brand">
        <Link to="/">Emploreum</Link>
      </div>
      <div className="container-fluid">
        <div className="navbar-btn hidden-xs">
          <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
        </div>
        <div id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            {children}
            <Navigation
              serverLogout={serverLogout}
              userInitials={userInitials}
            />
            <Language />
          </ul>
        </div>
      </div>
      <LoadingBar updateTime={100} maxProgress={88} progressIncrease={20} style={{ backgroundColor: '#3287B2', height: '3px' }} />
    </nav>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  serverLogout: PropTypes.func,
  userInitials: PropTypes.object,
};

export default Header;
