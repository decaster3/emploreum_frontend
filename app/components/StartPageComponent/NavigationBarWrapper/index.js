/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
  const { children } = props;
  return (
    <div id="wrapper" className="landing-emploreum">
      <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
          <Link to="/">Emploreum</Link>
        </div>
        <div className="container-fluid">
          <form className="navbar-form navbar-left">
          </form>
          <div id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <Link to="/login">
                  <button className="btn btn-default">
                    Login
                  </button>
                </Link>
              </li>
              <li className="dropdown">
                <Link to="/registration">
                  <button className="btn btn-primary">
                    Registration
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="main-content">
        { children }
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavigationBar;
