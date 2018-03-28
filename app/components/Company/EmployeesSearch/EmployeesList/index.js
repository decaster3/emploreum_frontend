/**
*
* EmployeesList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const EmployeesList = (props) => {
  const { children } = props;
  return (
    <div className="panel panel-headline">
      <div className="panel-body">
        { children }
      </div>
    </div>
  );
};

EmployeesList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EmployeesList;
