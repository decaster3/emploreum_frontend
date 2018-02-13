/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import PropType from 'prop-types';

export const Header = (props) => (
  <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
    <div className="brand">
      <Link to="/">Emploreum</Link>
    </div>
    <div className="container-fluid">
      <div className="navbar-btn hidden-xs">
        <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
      </div>
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" value="" className="form-control" placeholder="Search" />
          <span className="input-group-btn"><button type="button" className="btn btn-primary">Search</button></span>
        </div>
      </form>
      <div id="navbar-menu">
        <ul className="nav navbar-nav navbar-right">
          <li className="hidden-md hidden-sm hidden-lg">
            <div className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></div>
          </li>
          <li className="dropdown">
            <a href="" className="dropdown-toggle icon-menu" data-toggle="dropdown">
              <i className="fa fa-bell-o"></i>
              <span className="badge bg-danger">3</span>
            </a>
            <ul className="dropdown-menu notifications">
              <li>
                <a href="" className="notification-item">
                  <span className="dot bg-warning"></span>
                Company 1 reviewed your notification
              </a>
              </li>
              <li><a href="" className="notification-item"><span className="dot bg-danger"></span>Company 2 rejected your application</a></li>
              <li><a href="" className="notification-item"><span className="dot bg-success"></span>Company 3 have send answer for your application</a></li>
              <li><a href="" className="more">Show all notifications</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src="/avatar.jpeg" className="img-circle" alt="Avatar" />
              <span>Магомедов Михаил</span>
              <i className="icon-submenu fa fa-angle-down"></i></a>
            <ul className="dropdown-menu">
              <li><a href="" onClick={() => props.logout()}><i className="fa fa-sign-out"></i> <span>Выход</span></a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown">
              <img src="/ru.png" className="img-circle icon-64" alt="ru" /> <span>Ru</span>
              <i className="icon-submenu fa fa-angle-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="">
                  <img src="/us.png" className="img-circle icon-64" alt="us" />
                  <span>Us</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );

Header.propTypes = {
  logout: PropType.func,
};

export default Header;
