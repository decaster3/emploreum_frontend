import React from 'react';
import PropTypes from 'prop-types';
import { ProfileHeader, EmployeeInfo } from '../ProfileHeader';

export const EmployeeProfile = (props) => {
  const { address, balance, income } = props;

  return (
    <div className="container-fluid">
      <ProfileHeader address={address}>
        <EmployeeInfo balance={balance} income={income} />
      </ProfileHeader>
    </div>
  );
};

EmployeeProfile.propTypes = {
  address: PropTypes.string,
  balance: PropTypes.number,
  income: PropTypes.number,
};

export default EmployeeProfile;
