/* eslint no-script-url: 0 */
import React from 'react';
import CompanyFinanceHeader from './MainInformation';
import WorkingEmployees from './CompanyEmployees';
import RecentPayments from './Payments';
import OpenVacancies from './OpenVacancies';

export const CompanyFinanceCreator = () => (
  <div className="container-fluid">
    <CompanyFinanceHeader />
    <WorkingEmployees />
    <RecentPayments />
    <OpenVacancies />
  </div>
);

export default CompanyFinanceCreator;
