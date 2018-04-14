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
import { selectEmployees,
  selectEmployeesLoadStatus,
  selectUserState,
 } from './selectors';
import reducer from './reducer';
import { getEmployees, startChat } from './actions';

import Employee from './../../components/Company/EmployeesSearch/Employee/Loadable';
import EmployeesList from './../../components/Company/EmployeesSearch/EmployeesList/Loadable';
import FindUser from '../../components/Company/EmployeesSearch/FindUser';

export class EmployeesSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEmployees('');
  }
  renderEmployees() {
    if (this.props.loadingStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.employees.map((employee) =>
      (<Employee
        key={employee.id}
        id={employee.id}
        email={employee.email}
        login={employee.login}
        startChat={this.props.startChat}
      />)
    );
  }

  render() {
    const vacancies = this.renderEmployees();
    return (
      <EmployeesList>
        <FindUser getEmployees={this.props.getEmployees} />
        { vacancies }
      </EmployeesList>
    );
  }
}

EmployeesSearch.propTypes = {
  startChat: PropTypes.func,
  getEmployees: PropTypes.func,
  loadingStatus: PropTypes.string,
  employees: PropTypes.array,
  userState: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    loadingStatus: selectEmployeesLoadStatus(state),
    employees: selectEmployees(state),
    userState: selectUserState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: (evt) => dispatch(getEmployees(evt)),
    startChat: (evt) => dispatch(startChat(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeesSearch', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeesSearch);
