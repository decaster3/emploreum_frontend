import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import AsyncLink from '../../../../AsyncLink';

export const MenuItem = (props) => {
  const { name, changeView, view, url, icon, placeholder } = props;
  const changeItem = () => {
    changeView(name);
  };
  return (
    <li>
      <AsyncLink placeholder={placeholder} to={url} handleonClick={changeItem} className={view === name ? 'active' : ''}>
        <i className={`fa ${icon}`}></i>
        <span>{name}</span>
      </AsyncLink>
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  placeholder: PropTypes.object.isRequired,
};

export default MenuItem;
