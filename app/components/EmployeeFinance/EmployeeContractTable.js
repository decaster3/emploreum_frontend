import React from 'react';
import PropTypes from 'prop-types';

export const EmployeeContractTable = (props) => {
  const { tableName, ended } = props;

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
                <th>Contract address</th>
                <th>Company</th>
                <th>Salary</th>
                <th>Start date</th>
                <th>End date</th>
              </tr>
            </thead>
            <tbody>
              {props.children}
            </tbody>
          </table>
        </div>
        <div className="panel-footer">
          {
            ended ? (
              <div className="row">
                <div className="col-md-6">
                  <span className="panel-note">
                    <i className="fa fa-clock-o"></i> Last 1 month
                  </span>
                </div>
                <div className="col-md-6 text-right">
                  <button className="btn btn-default">Show all</button>
                </div>
              </div>
            )
            :
              <div className="row">
                <div className="col-md-12 text-right">
                  <button className="btn btn-default">Show all</button>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

EmployeeContractTable.propTypes = {
  tableName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  ended: PropTypes.bool,
};
