/**
*
* LevelFilterWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const LevelFilterWrapper = (props) => {
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

LevelFilterWrapper.propTypes = {
  classes: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LevelFilterWrapper;
