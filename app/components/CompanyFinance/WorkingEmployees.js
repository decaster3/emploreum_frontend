/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export const WorkingEmployees = (props) => {
  const { children } = props;

  return (
    <div className="col-md-5">
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <ul className="list-unstyled activity-list">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

WorkingEmployees.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
