/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import VacancyCreationButton from '../../VacancyCreationButton/Loadable';

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
        <VacancyCreationButton />
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
