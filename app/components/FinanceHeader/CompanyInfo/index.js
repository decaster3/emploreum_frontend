import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Loadable';

export const CompanyInfo = (props) => {
  const { balance, spending, employee, canBePaid } = props;

  return (
    <div className="row">
      { <Card number={`${balance} ETH`} title={'Balance'} icon="fa-bank" /> }
      { <Card number={`${spending} ETH`} title={'spending per week'} icon="fa-money" /> }
      { <Card number={canBePaid} title={'weeks can be paid'} icon="fa-history" /> }
      { <Card number={String(employee)} title={'employees'} icon="fa-users" /> }
    </div>

  );
};

CompanyInfo.propTypes = {
  balance: PropTypes.number.isRequired,
  canBePaid: PropTypes.number.isRequired,
  spending: PropTypes.number.isRequired,
  employee: PropTypes.number.isRequired,
};

export default CompanyInfo;
