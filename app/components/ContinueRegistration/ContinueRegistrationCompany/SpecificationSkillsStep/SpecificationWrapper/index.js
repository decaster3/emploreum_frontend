import React from 'react';
import PropTypes from 'prop-types';

const SpecificationWrapper = (props) => {
  const {
    children,
  } = props;
  return (
    <div id="wrapper">
      <div className="main">
        <div className="panel panel-headline col-md-8 col-md-offset-1">
          <h4 className="heading">Add specification</h4>
          <hr />
          {children}
        </div>
      </div>
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
