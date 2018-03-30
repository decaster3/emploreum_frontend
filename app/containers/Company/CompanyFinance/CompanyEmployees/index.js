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
  selectIsThereEmployeesContracts,
} from './selectors';
import reducer from './reducer';

import WorkingEmployee from '../../../../components/Company/CompanyFinanceComponents/Employees/WorkingEmployee';
import WorkingEmployeesWrapper from '../../../../components/Company/CompanyFinanceComponents/Employees/WorkingEmployeesWrapper';
import NoEmployees from '../../../../components/Company/CompanyFinanceComponents/NoEmployees';

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
        key={employee.employee.userId}
        photoPath={employee.employee.photoPath}
        name={employee.employee.name}
        position={null}
        contract={null}
        employeeId={employee.employee.userId}
      />)
    );
  }

  render() {
    const workingEmployee = this.renderWorkingEmployees();
    if (!this.props.isThereEmployeesContracts && this.props.employeesStatus === 'LOADED') {
      return <NoEmployees />;
    }
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
  isThereEmployeesContracts: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    employeesItems: selectEmployeesItems(state),
    employeesStatus: selectEmployeeStatus(state),
    isThereEmployeesContracts: selectIsThereEmployeesContracts(state),
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
