/**
*
* ProfileHeaderMain
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../../global-constants';//

function ProfileHeaderMain(props) {
  const { mainInfo } = props;
  const logoUrl = `${BASEURL}${mainInfo.company.logo}`;
  const companyProfileUrl = `/employee/company/${mainInfo.company.userId}`;
  const company = <Link to={companyProfileUrl}>{mainInfo.company.name}</Link>;
  return (
    <div className="profile-header">
      <div className="overlay" />
      <div className="profile-main">
        <img alt="logo" src={logoUrl} className="img-responsive" />
        <h3 className="name">
          {mainInfo.name}
        </h3>
          From {company}
      </div>
    </div>
  );
}

ProfileHeaderMain.propTypes = {
  mainInfo: PropTypes.object,
};

export default ProfileHeaderMain;
