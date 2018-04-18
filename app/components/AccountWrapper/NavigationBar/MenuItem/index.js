import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export const MenuItem = (props) => {
  const { name, view, url, icon, link } = props;
  const Linkk = link;
  return (
    <li>
      <Linkk url={url} className={view === name ? 'active' : ''}>
        <i className={`fa ${icon}`}></i>
        <span>{name}</span>
      </Linkk>
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
};

export default MenuItem;
