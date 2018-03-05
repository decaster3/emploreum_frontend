/**
*
* Notifications
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
    this.changeStateDropndown = this.changeStateDropndown.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isDropdownOpen) {
        this.changeStateDropndown();
        this.props.readNotifications();
      }
    }
  }

  changeStateDropndown() {
    if (this.state.isDropdownOpen) {
      this.props.readNotifications();
    }
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }

  render() {
    return (
      <li ref={this.setWrapperRef} className={this.state.isDropdownOpen ? 'dropdown open' : 'dropdown'}>
        <a href="#" className="icon-menu" onClick={() => this.changeStateDropndown()}>
          <i className="fa fa-bell-o"></i>
          { this.props.notificationsCount > 0
            ? <span className="badge bg-danger">{this.props.notificationsCount}</span>
            : <div />
          }
        </a>
        <ul className="dropdown-menu notifications">
          {this.props.notificationsCount > 0
            ? this.props.children
            :
            (<li>
              <a href="#" className="notification-item">
                <span className="dot bg-danger" />
                You have not got new notifications yet
              </a>
            </li>)
          }
        </ul>
      </li>
    );
  }
}

Notifications.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  notificationsCount: PropTypes.number,
  readNotifications: PropTypes.func,
};

export default Notifications;
