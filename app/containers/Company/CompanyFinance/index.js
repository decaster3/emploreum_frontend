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

import VacancyCreation from '../VacancyCreation/Loadable';

import {
  selectEmployeesItems,
  selectRecentPaymentsItems,
  selectOpenVacanciesItems,
  selectOpenVacanciesStatus,
  selectRecentPaymentsStatus,
  selectEmployeeStatus,
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
        workedTime={employee.workedTime}
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
    return this.props.openVacanciesItems.map((vacation) =>
      (<Vacancy
        key={vacation.position}
        position={vacation.position}
        hoursPerWeek={vacation.hoursPerWeek}
        payment={vacation.payment}
      />)
    );
  }

  render() {
    const address = '0x05b89ad8ef43fcf3d3f6b2e5fdac4cd4719bafa0';
    const balance = 12;
    const spending = 1.5;
    const employee = 37;
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
          balance={balance}
          spending={spending}
          employee={employee}
          workingEmployee={workingEmployee}
          recentPaments={recentPaments}
          vacancies={vacancies}
        />
        <VacancyCreation />
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
};

function mapStateToProps(state) {
  return {
    employeesItems: selectEmployeesItems(state),
    recentPaymentsItems: selectRecentPaymentsItems(state),
    openVacanciesItems: selectOpenVacanciesItems(state),
    openVacanciesStatus: selectOpenVacanciesStatus(state),
    recentPaymentsStatus: selectRecentPaymentsStatus(state),
    employeesStatus: selectEmployeeStatus(state),
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
