/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import NavifationBar from './NavigationBar/Loadable';

export const AccountWrapper = (props) => (
  <div>
    <NavifationBar
      url={props.url}
      view={props.view}
      changeView={props.changeView}
    />
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
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default AccountWrapper;
