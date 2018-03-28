/**
*
* LanguagesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

export const LanguagesWrapper = (props) => {
  const { children } = props;
  return (
    <div className="table-responsive">
      {children}
    </div>
  );
};

LanguagesWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LanguagesWrapper;
