import React from 'react';
import PropTypes from 'prop-types';
import EmployeeInfo from '../../../FinanceHeader/EmployeeInfo/Loadable';
import FinanceHeader from '../../../FinanceHeader/FinanceHeader/Loadable';
import TableCreator from '../TableCreator/Loadable';

export const EmployeeFinance = (props) => {
  const { address, addressStatus, balance, income, currentContracts, endedContracts, awaitedContracts, endedContractsCount, currentContractsCount } = props;
  const tableVariantOne = ['Contract address',
    'Company',
    'Salary',
    'Start date',
    'End date',
  ];
  const tableVariantTwo = ['Duration', 'Company', 'Salary'];
  return (
    <div className="container-fluid">

      <FinanceHeader address={address} addressStatus={addressStatus}>
        <EmployeeInfo
          balance={balance}
          income={income}
          endedContractsCount={endedContractsCount}
          currentContractsCount={currentContractsCount}
        />
      </FinanceHeader>

      <TableCreator
        tableName="Current contracts"
        columns={tableVariantOne}
      >
        {currentContracts}
      </TableCreator>

      <TableCreator
        tableName="Ended contracts"
        columns={tableVariantOne}
      >
        {endedContracts}
      </TableCreator>

      <TableCreator
        tableName="Awaited contracts"
        columns={tableVariantTwo}
      >
        {awaitedContracts}
      </TableCreator>
    </div>
  );
};

EmployeeFinance.propTypes = {
  address: PropTypes.string.isRequired,
  addressStatus: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  endedContractsCount: PropTypes.number.isRequired,
  currentContractsCount: PropTypes.number.isRequired,
  currentContracts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  awaitedContracts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  endedContracts: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EmployeeFinance;
