import React from 'react';
import PropTypes from 'prop-types';

const SpecificationWrapper = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      <h4 className="heading">Add specification</h4>
      <hr />
      {children}
    </div>
  );
};

SpecificationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SpecificationWrapper;
