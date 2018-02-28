/**
 *
 * CompanyFinanceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectEmployeesItems,
  selectEmployeeStatus,
} from './selectors';
import reducer from './reducer';

import WorkingEmployee from '../../../../components/Company/CompanyFinanceComponents/Employees/WorkingEmployee/Loadable';
import WorkingEmployeesWrapper from '../../../../components/Company/CompanyFinanceComponents/Employees/WorkingEmployeesWrapper/Loadable';

import { getEmployees } from './actions';

export class CompanyFinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getEmployees();
  }

  renderWorkingEmployees() {
    if (this.props.employeesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.employeesItems.map((employee) =>
      (<WorkingEmployee
        key={employee.name}
        avatar={employee.avatar}
        name={employee.name}
        position={employee.position}
        contract={employee.contract}
        employeeId={employee.employeeId}
      />)
    );
  }

  render() {
    const workingEmployee = this.renderWorkingEmployees();
    return (
      <WorkingEmployeesWrapper>
        {workingEmployee}
      </WorkingEmployeesWrapper>
    );
  }
}

CompanyFinance.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  employeesItems: PropTypes.array,
  employeesStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    employeesItems: selectEmployeesItems(state),
    employeesStatus: selectEmployeeStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: () => dispatch(getEmployees()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinanceWorkingEmployees', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyFinance);
