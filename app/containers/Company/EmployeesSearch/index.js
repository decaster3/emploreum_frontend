/**
 *
 * VacanciesSearch
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';
import injectReducer from 'utils/injectReducer';
import { selectEmployees, selectEmployeesLoadStatus } from './selectors';
import reducer from './reducer';
import { getEmployees } from './actions';

import Employee from '../../../components/Company/EmployeesSearch/Employee/Loadable';
import EmployeesList from '../../../components/Company/EmployeesSearch/EmployeesList/Loadable';

export class EmployeesSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEmployees();
  }
  renderEmployees() {
    if (this.props.loadingStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.employees.map((employee) =>
      (<Employee
        key={employee.userId}
        id={employee.userId}
        specifications={employee.specifications.slice(0, 5).join(', ')}
        skills={employee.skills.slice(0, 5).join(', ')}
        name={employee.name}
        photoPath={employee.photoPath}
        lastWork={employee.lastWork}
      />)
    );
  }

  render() {
    const vacancies = this.renderEmployees();
    return (
      <EmployeesList>
        { vacancies }
      </EmployeesList>
    );
  }
}

EmployeesSearch.propTypes = {
  getEmployees: PropTypes.func,
  loadingStatus: PropTypes.string,
  employees: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    loadingStatus: selectEmployeesLoadStatus(state),
    employees: selectEmployees(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: () => dispatch(getEmployees()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeesSearch', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeesSearch);
