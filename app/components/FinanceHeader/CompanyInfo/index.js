import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Loadable';

export const CompanyInfo = (props) => {
  const { balance, spending, employee } = props;
  return (
    <div className="row">
      { <Card number={`${balance} ETH`} title={'Balance'} /> }
      { <Card number={`${spending} ETH`} title={'spending per week'} /> }
      { <Card number={String(balance / spending)} title={'weeks can be paid'} /> }
      { <Card number={String(employee)} title={'employees'} /> }
    </div>

  );
};

CompanyInfo.propTypes = {
  balance: PropTypes.number.isRequired,
  spending: PropTypes.number.isRequired,
  employee: PropTypes.number.isRequired,
};

export default CompanyInfo;
