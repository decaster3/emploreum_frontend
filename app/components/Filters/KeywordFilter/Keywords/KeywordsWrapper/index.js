/**
*
* KeywordsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const KeywordsWrapper = (props) => {
  const { children } = props;
  return (
    <div className="margin-top-15">
      {children}
    </div>
  );
};

KeywordsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default KeywordsWrapper;
