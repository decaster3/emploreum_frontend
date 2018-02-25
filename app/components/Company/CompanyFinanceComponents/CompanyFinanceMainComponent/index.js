import React from 'react';
import PropTypes from 'prop-types';

import CompanyInfo from '../../../FinanceHeader/CompanyInfo/Loadable';

import FinanceHeader from '../../../FinanceHeader/FinanceHeader/Loadable';

import WorkingEmployees from '../Employees/WorkingEmployees/Loadable';
import RecentPayments from '../Payments/RecentPauments/Loadable';
import Vacancies from '../Vacancies/Vacancies/Loadable';

const CompanyFinanceComponent = (props) => {
  const { address, balance, spending, employee, workingEmployee, recentPaments, vacancies, status, canBePaid } = props;

  return (
    <div className="container-fluid">
      <FinanceHeader address={address} addressStatus={status} >
        <CompanyInfo balance={balance} spending={spending} employee={employee} canBePaid={canBePaid} />
      </FinanceHeader>

      <WorkingEmployees>
        {workingEmployee}
      </WorkingEmployees>

      <RecentPayments>
        {recentPaments}
      </RecentPayments>

      <Vacancies>
        {vacancies}
      </Vacancies>
    </div>
  );
};

CompanyFinanceComponent.propTypes = {
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  canBePaid: PropTypes.number.isRequired,
  spending: PropTypes.number.isRequired,
  employee: PropTypes.number.isRequired,
  workingEmployee: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  recentPaments: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  vacancies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CompanyFinanceComponent;
