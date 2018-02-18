/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export const Vacancies = (props) => {
  const { children } = props;

  return (
    <div className="col-md-12">
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Open Vacancies </h3>
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
              <Link to="vacancy/create" className="btn btn-success">New vacation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Vacancies.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Vacancies;
