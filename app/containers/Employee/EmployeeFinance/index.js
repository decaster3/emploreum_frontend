/* eslint no-script-url: 0 */
import React from 'react';
import EmployeeFinanceHeader from './MainInformation';
import AwaitedContrats from './AwaitedContracts';
import CurrentContracts from './CurrentContracts';
import EndedContracts from './EndedContracts';

export const EmployeeFinanceCreator = () => (
  <div className="container-fluid">
    <EmployeeFinanceHeader />
    <CurrentContracts />
    <EndedContracts />
    <AwaitedContrats />
  </div>
);

export default EmployeeFinanceCreator;
