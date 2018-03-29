/**
*
* TagsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const TagsWrapper = (props) => {
  const { children } = props;
  return (
    <div className="input-tag-container">
      {children}
    </div>
  );
};

TagsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TagsWrapper;
