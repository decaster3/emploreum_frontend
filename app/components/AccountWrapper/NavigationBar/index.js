/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

export const NavigationBar = (props) => (
  <div id="sidebar-nav" className="sidebar">
    <div className="sidebar-scroll">
      <nav>
        <ul className="nav">
          {props.children}
        </ul>
      </nav>
    </div>
  </div>
  );

NavigationBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


/*
  <li>
  <Link to={`${props.url}/finance`} onClick={() => props.changeView('bookmark')} className={props.view === 'bookmark' ? 'active' : ''}>
      <i className="fa fa-bookmark"></i>
  <span>Bookmarks</span>
  </Link>
  </li>
  <li>
  <Link to={`${props.url}/finance`} onClick={() => props.changeView('exit')} className={props.view === 'exit' ? 'active' : ''}>
<i className="fa fa-sign-out"></i>
  <span>Exit</span>
  </Link>
  </li>
  */
export default NavigationBar;
