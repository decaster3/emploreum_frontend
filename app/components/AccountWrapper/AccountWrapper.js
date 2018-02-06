/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AccountWrapper = (props) => (
  <div id="wrapper">
    {
    // NAVBAR
    }
    <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="brand">
        <Link to={`${props.url}`}>Emploreum</Link>
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
              <a href="javascript:void(0)" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="badge bg-danger">3</span>
              </a>
              <ul className="dropdown-menu notifications">
                <li>
                  <a href="javascript:void(0)" className="notification-item">
                    <span className="dot bg-warning"></span>
                    Company 1 reviewed your notification
                  </a>
                </li>
                <li><a href="javascript:void(0)" className="notification-item"><span className="dot bg-danger"></span>Company 2 rejected your application</a></li>
                <li><a href="javascript:void(0)" className="notification-item"><span className="dot bg-success"></span>Company 3 have send answer for your application</a></li>
                <li><a href="javascript:void(0)" className="more">Show all notifications</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="/avatar.jpeg" className="img-circle" alt="Avatar" />
                <span>Магомедов Михаил</span>
                <i className="icon-submenu fa fa-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="javascript:void(0)"><i className="fa fa-sign-out"></i> <span>Выход</span></a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                <img src="/ru.png" className="img-circle icon-64" alt="ru" /> <span>Ru</span>
                <i className="icon-submenu fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="javascript:void(0)">
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
    {
    // END NAVBAR
    // LEFT SIDEBAR
    }
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
              <Link to={`${props.url}/finance`} onClick={() => props.changeView('vacation')} className={props.view === 'vacation' ? 'active' : ''}>
                <i className="fa fa-address-book"></i>
                <span>Vacations</span>
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
    {
    // MAIN
    }
    <div className="main">
      {
        // MAIN CONTENT
      }
      <div className="main-content">
        {props.children}
      </div>
      {
      // END MAIN CONTENT
      }
    </div>

  </div>
);

AccountWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};
