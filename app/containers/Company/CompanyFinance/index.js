/* eslint no-script-url: 0 */
import React from 'react';
import CompanyFinanceHeader from './MainInformation/Loadable';
import WorkingEmployees from './CompanyEmployees/Loadable';
import RecentPayments from './Payments/Loadable';
import OpenVacancies from './OpenVacancies/Loadable';

export const CompanyFinanceCreator = () => (
  <div className="container-fluid">
    <CompanyFinanceHeader />
    <WorkingEmployees />
    <RecentPayments />
    <OpenVacancies />
  </div>
);

export default CompanyFinanceCreator;
