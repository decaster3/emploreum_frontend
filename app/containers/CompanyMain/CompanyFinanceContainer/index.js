/**
 *
 * CompanyFinanceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectCompanyFinanceContainer from './selectors';
import reducer from './reducer';
import { CompanyFinance, WorkingEmployee, Payment, Vacation } from '../../../components/CompanyFinance';

export class CompanyFinanceContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderWorkingEmployees(employees) {
    return employees.slice(0, 2).map((employee) =>
      (<WorkingEmployee
        avatar={employee.avatar}
        name={employee.name}
        position={employee.position}
        workedTime={employee.workedTime}
      />)
    );
  }

  renderPayment(payments) {
    return payments.slice(0, 4).map((payment) =>
      (<Payment
        address={payment.address}
        name={payment.name}
        payment={payment.payment}
        date={payment.date}
      />)
    );
  }

  renderVacations(vacations) {
    return vacations.slice(0, 4).map((vacation) =>
      (<Vacation
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
    const mockPayments = [{
      address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
      name: 'Mickle',
      payment: 2,
      date: 'Feb 1, 2018',
    }, {
      address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
      name: 'Rinat',
      payment: 2,
      date: 'Feb 1, 2018',
    }, {
      address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
      name: 'Rinat',
      payment: 2,
      date: 'Feb 1, 2018',
    }, {
      address: '0xaaa89ad8ef43fcf3d3f6b2e5fdac4cd4719bafbb',
      name: 'Ilgiz',
      payment: 2,
      date: 'Feb 1, 2018',
    }];

    const mockEmployees = [{
      avatar: '/avatar.jpeg',
      name: 'Mickle',
      position: 'Node js developer',
      workedTime: 'working 5 years',
    }, {
      avatar: '/avatar.jpeg',
      name: 'Alex',
      position: 'Java developer',
      workedTime: 'working 3 month',
    }];
    const mockVacations = [{
      position: 'Java junior develober',
      hoursPerWeek: '25 - 40 hours/week',
      payment: '1 eth >',
    }, {
      position: 'Java middle develober',
      hoursPerWeek: '35 - 40 hours/week',
      payment: '1.5 eth >',
    }, {
      position: 'Phyton develober',
      hoursPerWeek: '25 - 40 hours/week',
      payment: '1 eth >',
    }, {
      position: 'React JS develober',
      hoursPerWeek: '25 - 40 hours/week',
      payment: '1.5 eth >',
    }];
    const workingEmployee = this.renderWorkingEmployees(mockEmployees);
    const recentPaments = this.renderPayment(mockPayments);
    const vacations = this.renderVacations(mockVacations);

    return (
      <div>
        <Helmet>
          <title>CompanyFinanceContainer</title>
          <meta name="description" content="Description of CompanyFinanceContainer" />
        </Helmet>
        <CompanyFinance
          address={address}
          balance={balance}
          spending={spending}
          employee={employee}
          workingEmployee={workingEmployee}
          recentPaments={recentPaments}
          vacations={vacations}
        />
      </div>
    );
  }
}

CompanyFinanceContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  companyfinancecontainer: makeSelectCompanyFinanceContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinanceContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyFinanceContainer);
