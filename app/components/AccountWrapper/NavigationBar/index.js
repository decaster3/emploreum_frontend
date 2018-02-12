/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationBar = (props) => (
  <div id="sidebar-nav" className="sidebar">
    <div className="sidebar-scroll">
      <nav>
        <ul className="nav">
          <li>
            <Link to={`${props.url}`} onClick={() => props.changeView('profile')} className={props.view === 'profile' ? 'active' : ''}>
              <i className="fa fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to={`${props.url}/vacancies`} onClick={() => props.changeView('vacation')} className={props.view === 'vacation' ? 'active' : ''}>
              <i className="fa fa-address-book"></i>
              <span>Vacancies</span>
            </Link>
          </li>
          <li>
            <Link to={`${props.url}/finance`} onClick={() => props.changeView('finance')} className={props.view === 'finance' ? 'active' : ''}>
              <i className="fa fa-dollar"></i>
              <span>Finance</span>
            </Link>
          </li>
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
        </ul>
      </nav>
    </div>
  </div>
  );

NavigationBar.propTypes = {
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default NavigationBar;
