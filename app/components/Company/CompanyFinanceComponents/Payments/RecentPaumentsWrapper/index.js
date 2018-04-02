/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';

export const RecentPayments = (props) => {
  const { children } = props;
  return (
    <div className="col-md-6">
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Recent payments</h3>
        </div>
        <div className="panel-body no-padding table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Contract address</th>
                <th>Employee</th>
                <th>Salary</th>
                <th>Payment date</th>
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
                <i className="fa fa-clock-o"></i> Last 1 month
              </span>
            </div>
            <div className="col-md-6 text-right">
              <a href="javascript:void(0)" className="btn btn-default">Show all</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentPayments.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RecentPayments;
