import React from 'react';
import PropTypes from 'prop-types';

const ChoosenSkills = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      {children}
      <div className="clearfix" />
    </div>
  );
};

ChoosenSkills.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ChoosenSkills;
