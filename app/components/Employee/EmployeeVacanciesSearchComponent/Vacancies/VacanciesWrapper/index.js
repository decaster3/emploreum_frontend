/**
*
* VacanciesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';

const VacanciesWrapper = (props) => {
  const { children } = props;
  return (
    <div className="panel panel-headline">
      <div className="panel-body">
        <div className="form-inline" style={{ 'margin-bottom': '20px' }}>
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

VacanciesWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default VacanciesWrapper;
