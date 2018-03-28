/**
*
* SkillsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const SkillsWrapper = (props) => {
  const { children } = props;
  return (
    <div className="table-responsive">
      {children}
    </div>
  );
};

SkillsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SkillsWrapper;
