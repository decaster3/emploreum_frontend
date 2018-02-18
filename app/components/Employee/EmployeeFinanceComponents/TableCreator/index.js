/**
*
* TableCreator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const TableCreator = (props) => {
  const { columns, tableName, children } = props;
  const renderColums = columns.map((column) => (
    <th key={column}>{column}</th>
  ));
  return (
    <div className="col-md-12">
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">{tableName}</h3>
        </div>
        <div className="panel-body no-padding table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {renderColums}
              </tr>
            </thead>
            <tbody>
              { children }
            </tbody>
          </table>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-6">
              <span className="panel-note">
                <i className="fa fa-clock-o" />
                Показано за 1 месяц
              </span>
            </div>
            <div className="col-md-6 text-right">
              <a href="" className="btn btn-default">Просмотреть все</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TableCreator.propTypes = {
  columns: PropTypes.array,
  tableName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TableCreator;
