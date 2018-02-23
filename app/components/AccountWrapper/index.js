/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar/Loadable';

export const AccountWrapper = (props) => (
  <div>
    <NavigationBar>
      {props.menu}
    </NavigationBar>
    <div className="main">
      <div className="main-content">
        {props.children}
      </div>
    </div>
  </div>
);

AccountWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  menu: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AccountWrapper;
