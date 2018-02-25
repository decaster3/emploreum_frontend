/**
 *
 * CompanyFinanceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectEmployeesItems,
  selectRecentPaymentsItems,
  selectOpenVacanciesItems,
  selectOpenVacanciesStatus,
  selectRecentPaymentsStatus,
  selectEmployeeStatus,
  selectHeader,
} from './selectors';
import reducer from './reducer';

import CompanyFinanceComponent from '../../../components/Company/CompanyFinanceComponents/CompanyFinanceMainComponent/Loadable';
import WorkingEmployee from '../../../components/Company/CompanyFinanceComponents/Employees/WorkingEmployee/Loadable';
import Payment from '../../../components/Company/CompanyFinanceComponents/Payments/RecentPayment/Loadable';
import Vacancy from '../../../components/Company/CompanyFinanceComponents/Vacancies/Vacancy/Loadable';

import { getAllFinance } from './actions';

export class CompanyFinance extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getAllFinance();
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

  renderPayment() {
    if (this.props.recentPaymentsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.recentPaymentsItems.map((payment) =>
      (<Payment
        key={payment.address}
        address={payment.address}
        name={payment.name}
        payment={payment.payment}
        date={payment.date}
      />)
    );
  }

  renderVacancies() {
    if (this.props.openVacanciesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.openVacanciesItems.map((vacancy) =>
      (<Vacancy
        id={vacancy.id}
        key={vacancy.id}
        position={vacancy.position}
        hoursPerWeek={vacancy.hoursPerWeek}
        payment={vacancy.payment}
      />)
    );
  }

  render() {
    const { address, balance, spending, employeeCount, status, canBePaid } = this.props.header;

    const workingEmployee = this.renderWorkingEmployees();
    const recentPaments = this.renderPayment();
    const vacancies = this.renderVacancies();

    return (
      <div>
        <Helmet>
          <title>CompanyFinance</title>
          <meta name="description" content="Description of CompanyFinance" />
        </Helmet>
        <CompanyFinanceComponent
          address={address}
          canBePaid={canBePaid}
          status={status}
          balance={balance}
          spending={spending}
          employee={employeeCount}
          workingEmployee={workingEmployee}
          recentPaments={recentPaments}
          vacancies={vacancies}
        />
      </div>
    );
  }
}

CompanyFinance.propTypes = {
  getAllFinance: PropTypes.func.isRequired,
  employeesItems: PropTypes.array,
  recentPaymentsItems: PropTypes.array,
  openVacanciesItems: PropTypes.array,
  openVacanciesStatus: PropTypes.string,
  recentPaymentsStatus: PropTypes.string,
  employeesStatus: PropTypes.string,
  header: PropTypes.shape({
    address: PropTypes.string,
    status: PropTypes.string,
    balance: PropTypes.number,
    canBePaid: PropTypes.number,
    spending: PropTypes.number,
    employeeCount: PropTypes.number,
  }),
};

function mapStateToProps(state) {
  return {
    employeesItems: selectEmployeesItems(state),
    recentPaymentsItems: selectRecentPaymentsItems(state),
    openVacanciesItems: selectOpenVacanciesItems(state),
    openVacanciesStatus: selectOpenVacanciesStatus(state),
    recentPaymentsStatus: selectRecentPaymentsStatus(state),
    employeesStatus: selectEmployeeStatus(state),
    header: selectHeader(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllFinance: () => dispatch(getAllFinance()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinance', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyFinance);
