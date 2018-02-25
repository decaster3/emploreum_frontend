import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Loadable';

export const EmployeeInfo = (props) => {
  const { balance, income, endedContractsCount, currentContractsCount } = props;
  return (
    <div className="row">
      { <Card number={`${balance || 0} ETH`} title={'Balance'} icon="fa-bank" /> }
      { <Card number={`${income || 0} ETH`} title={'income per month'} icon="fa-money" /> }
      { <Card number={endedContractsCount || 0} title={'ended contracts'} icon="fa-shopping-bag" /> }
      { <Card number={currentContractsCount || 0} title={'current contracts'} icon="fa-pause" /> }
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
