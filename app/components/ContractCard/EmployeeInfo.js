import React from 'react';
import PropTypes from 'prop-types';

export const EmployeeInfo = (props) => {
  const { balance, income } = props;

  return (
    <div>
      <h4>balance: {balance} eth</h4>
      <h4>income: {income} eth per week</h4>
    </div>
  );
};

EmployeeInfo.propTypes = {
  balance: PropTypes.number,
  income: PropTypes.number,
};
