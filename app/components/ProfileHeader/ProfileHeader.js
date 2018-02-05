import React from 'react';
import PropTypes from 'prop-types';

export const ProfileHeader = (props) => {
  const { address } = props;

  return (
    <div className="panel panel-headline">
        <div className="panel-heading">
            <h3 className="panel-title">Ethereum address: {address}
            </h3>
        </div>
        <div className="panel-body padding-bottom-30">
                {props.children}

        </div>
    </div>

  );
};

ProfileHeader.propTypes = {
  address: PropTypes.string,
  children: PropTypes.element.isRequired,
};
