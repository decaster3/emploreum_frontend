import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSpecifications = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      {children}
    </div>
  );
};

ChoosenSpecifications.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ChoosenSpecifications;
