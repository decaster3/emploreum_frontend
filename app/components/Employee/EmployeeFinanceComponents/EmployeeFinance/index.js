import React from 'react';
import PropTypes from 'prop-types';
import EmployeeInfo from '../../../FinanceHeader/EmployeeInfo/Loadable';
import FinanceHeader from '../../../FinanceHeader/FinanceHeader/Loadable';
import EmployeeContractTable from '../EmployeeContractTable/Loadable';

export const EmployeeFinance = (props) => {
  const { address, balance, income, currentContracts, endedContracts } = props;
  return (
    <div className="container-fluid">
      <FinanceHeader address={address}>
        <EmployeeInfo balance={balance} income={income} />
      </FinanceHeader>
      <EmployeeContractTable tableName="Current contracts">
        {currentContracts}
      </EmployeeContractTable>

      <EmployeeContractTable tableName="Ended contracts" ended>
        {endedContracts}
      </EmployeeContractTable>
    </div>
  );
};

EmployeeFinance.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  currentContracts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  endedContracts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EmployeeFinance;
