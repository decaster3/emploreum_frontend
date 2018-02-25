import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Loadable';

export const EmployeeInfo = (props) => {
  const { balance, income, endedContractsCount, currentContractsCount } = props;
  return (
    <div className="row">
      { <Card number={`${balance} ETH`} title={'Balance'} icon="fa-bank" /> }
      { <Card number={`${income} ETH`} title={'income per month'} icon="fa-money" /> }
      { <Card number={endedContractsCount} title={'ended contracts'} icon="fa-shopping-bag" /> }
      { <Card number={currentContractsCount} title={'current contracts'} icon="fa-pause" /> }
    </div>

  );
};

EmployeeInfo.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  currentContractsCount: PropTypes.number.isRequired,
  endedContractsCount: PropTypes.number.isRequired,
};

export default EmployeeInfo;
