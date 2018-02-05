import React from 'react';
import PropTypes from 'prop-types';

export const ProfileHeader = (props) => {
  const { address } = props;

  return (
    <hgroup>
      <h3>ethereum address: {address}</h3>
      {props.children}
    </hgroup>
  );
};

ProfileHeader.propTypes = {
  address: PropTypes.string,
  children: PropTypes.element.isRequired,
};
