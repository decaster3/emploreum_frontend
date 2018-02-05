import React from 'react';
import PropTypes from 'prop-types';

export const CompanyInfo = (props) => {
  const { balance, period, expenditure } = props;

  return (
    <div>
      <h4>balance: {balance} eth</h4>
      <h4>enough during: {period} week(s)</h4>
      <h4>expenditure: {expenditure} eth per week</h4>
    </div>
  );
};

CompanyInfo.propTypes = {
  balance: PropTypes.number,
  expenditure: PropTypes.number,
  period: PropTypes.string,
};
