/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';

function NavigationBar(props) {
  return (
    <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="brand">
        <a href="#">Emploreum</a>
      </div>
      <div className="container-fluid">
        <form className="navbar-form navbar-left">
        </form>
        <div id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden-md hidden-sm hidden-lg">
              <div className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></div>
            </li>

            <li className="dropdown">
              <button className="btn btn-primary">Post vacancy</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavigationBar.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default NavigationBar;
