/**
*
* SkillsFilterWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const SkillsFilterWrapper = (props) => {
  const { children, classes } = props;
  let className = '';
  classes.forEach((el) => {
    className = `${className} ${el}`;
  });
  return (
    <div className={className}>
      {children}
    </div>
  );
};

SkillsFilterWrapper.propTypes = {
  classes: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SkillsFilterWrapper;
