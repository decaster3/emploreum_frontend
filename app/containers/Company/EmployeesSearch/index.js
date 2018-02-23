/**
 *
 * VacanciesSearch
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';
import injectReducer from 'utils/injectReducer';
import { selectEmployees, selectEmployeesLoadStatus } from './selectors';
import reducer from './reducer';
import { getEmployees } from './actions';

import Employee from '../../../components/Company/EmployeesSearch/Employees/Employee/Loadable';
import EmployeesList from '../../../components/Company/EmployeesSearch/Employees/EmployeesList/Loadable';

export class EmployeesSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEmployees();
  }

  renderVacancies() {
    if (this.props.loadingStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.employees.map((vacancy) =>
      (<Employee
        key={vacancy.id}
        id={vacancy.id}
        profile={vacancy.profile}
        name={vacancy.name}
        companyName={vacancy.companyName}
        acceptableCurrencies={vacancy.acceptableCurrencies}
        description={vacancy.description}
        contractDuration={vacancy.contractDuration}
      />)
    );
  }

  render() {
    const vacancies = this.renderVacancies();
    return (
      <div>
        <Helmet>
          <title>Employees search</title>
          <meta name="description" content="Description of EmployeesSearch" />
        </Helmet>
        <EmployeesList>
          { vacancies }
        </EmployeesList>
      </div>
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
