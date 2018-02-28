/* eslint no-script-url: 0 */
import React from 'react';
import EmployeeFinanceHeader from './MainInformation/Loadable';
import AwaitedContrats from './AwaitedContracts/Loadable';
import CurrentContracts from './CurrentContracts/Loadable';
import EndedContracts from './EndedContracts/Loadable';

export const EmployeeFinanceCreator = () => (
  <div className="container-fluid">
    <EmployeeFinanceHeader />
    <CurrentContracts />
    <EndedContracts />
    <AwaitedContrats />
  </div>
);

export default EmployeeFinanceCreator;
