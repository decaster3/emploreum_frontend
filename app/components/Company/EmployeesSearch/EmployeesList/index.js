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
        <div className="form-inline" style={{ marginBottom: '20px' }}>
          <div className="form-group">
            Sort by
          </div>
          <div className="form-group">
            <select className="form-control">
              <option>Data</option>
              <option>Week payment</option>
            </select>
          </div>
        </div>
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
