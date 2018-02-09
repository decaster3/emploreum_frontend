/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';

export const Vacations = (props) => {
  const { children } = props;

  return (
    <div className="col-md-12">
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Open vacations </h3>
        </div>

        <div className="panel-body table-responsive">
          <table className="table">
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-md-12 text-right">
              <a href="javascript:void(0)" className="btn btn-success" data-toggle="modal" data-target="#modal-vacancy">New vacation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Vacations.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
