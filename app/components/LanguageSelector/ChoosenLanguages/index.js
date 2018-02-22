import React from 'react';
import PropTypes from 'prop-types';

const ChoosenLanguages = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      {children}
    </div>
  );
};

ChoosenLanguages.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ChoosenLanguages;
