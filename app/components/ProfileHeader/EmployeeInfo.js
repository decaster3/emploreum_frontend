import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card';

export const EmployeeInfo = (props) => {
  const { balance, income } = props;
  return (
    <div className="row">
      { <Card number={`${balance} ETH`} title={'Balance'} /> }
      { <Card number={`${income} ETH`} title={'income per month'} /> }
      { <Card number={'10'} title={'ended contracts'} /> }
      { <Card number={'20'} title={'current contracts'} /> }
    </div>

  );
};

EmployeeInfo.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
};
