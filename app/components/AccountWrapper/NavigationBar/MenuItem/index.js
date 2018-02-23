import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MenuItem = (props) => {
  const { name, changeView, view, url, icon } = props;

  return (
    <li>
      <Link to={url} onClick={() => changeView(name)} className={view === name ? 'active' : ''}>
        <i className={`fa ${icon}`}></i>
        <span>{name}</span>
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default MenuItem;
