/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const EmployeeWrapper = (props) => (
  <div id="wrapper">
    {
    // NAVBAR
    }
    <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="brand">
        <a href="index.html">Emploreum</a>
      </div>
      <div className="container-fluid">
        <div className="navbar-btn hidden-xs">
          <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
        </div>
        <form className="navbar-form navbar-left">
          <div className="input-group">
            <input type="text" value="" className="form-control" placeholder="Поиск всего..." />
            <span className="input-group-btn"><button type="button" className="btn btn-primary">Поиск</button></span>
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
                <span className="badge bg-danger">5</span>
              </a>
              <ul className="dropdown-menu notifications">
                <li><a href="javascript:void(0)" className="notification-item"><span className="dot bg-warning"></span>Компания 1
                  просмотрела ваше уведомление</a></li>
                <li><a href="javascript:void(0)" className="notification-item"><span className="dot bg-danger"></span>Компания 1
                  отказала вам</a></li>
                <li><a href="javascript:void(0)" className="notification-item"><span className="dot bg-success"></span>Компания 3
                  приславла вам ответ</a></li>
                <li><a href="javascript:void(0)" className="more">Смотреть все уведомления</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="./avatar.jpeg" className="img-circle" alt="Avatar" />
                <span>Магомедов Михаил</span>
                <i className="icon-submenu fa fa-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="javascript:void(0)"><i className="fa fa-sign-out"></i> <span>Выход</span></a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">
                <img src="./ru.png" className="img-circle icon-64" alt="ru" /> <span>Ru</span>
                <i className="icon-submenu fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="javascript:void(0)">
                    <img src="./us.png" className="img-circle icon-64" alt="us" />
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
              <Link to="/employee" className={ props.profile ? 'active': ''}>
                <i className="fa fa-user"></i>
                <span>Профиль</span>
              </Link>
            </li>
            <li>
              <Link to="/employee" className={ props.vacation ? 'active': ''}>
                <i className="fa fa-address-book"></i>
                <span>Вакансии</span>
              </Link>
            </li>
            <li>
              <Link to="/employee" className={ props.finance ? 'active': ''}>
                <i className="fa fa-dollar"></i>
                <span>Финансы</span>
              </Link>
            </li>
            <li>
              <Link to="/employee" className={ props.bookmark ? 'active': ''}>
                <i className="fa fa-bookmark"></i>
                <span>Закладки</span>
              </Link>
            </li>
            <li>
              <Link to="/employee" className={ props.exit ? 'active': ''}>
                <i className="fa fa-sign-out"></i>
                <span>Выход</span>
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

EmployeeWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
