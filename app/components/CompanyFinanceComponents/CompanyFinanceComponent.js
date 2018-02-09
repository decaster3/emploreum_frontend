import React from 'react';
import PropTypes from 'prop-types';
import { FinanceHeader, CompanyInfo } from '../FinanceHeader';
import { WorkingEmployees } from './Employees/WorkingEmployees';
import { RecentPayments } from './Payments/RecentPayments';
import { Vacations } from './Vacancys/Vacations';

export const CompanyFinanceComponent = (props) => {
  const { address, balance, spending, employee, workingEmployee, recentPaments, vacations } = props;

  return (
    <div className="container-fluid">
      <FinanceHeader address={address}>
        <CompanyInfo balance={balance} spending={spending} employee={employee} />
      </FinanceHeader>

      <WorkingEmployees>
        {workingEmployee}
      </WorkingEmployees>

      <RecentPayments>
        {recentPaments}
      </RecentPayments>

      <Vacations>
        {vacations}
      </Vacations>
    </div>
  );
};

CompanyFinanceComponent.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
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
  vacations: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
