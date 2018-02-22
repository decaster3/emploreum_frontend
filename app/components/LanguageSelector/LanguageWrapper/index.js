import React from 'react';
import PropTypes from 'prop-types';

const LanguageWrapper = (props) => {
  const {
    children,
  } = props;
  return (
    <div className="col-lg-12">
      <h4 className="heading">Add Language</h4>
      <hr />
      {children}
    </div>
  );
};

LanguageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LanguageWrapper;
