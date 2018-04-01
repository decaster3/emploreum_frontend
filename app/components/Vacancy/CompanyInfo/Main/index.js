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
  const { mainInfo, mainInfoStatus } = props;
  const logoUrl = `${BASEURL}${mainInfoStatus === 'LOADED' ? mainInfo.logo : '/'}`;
  const companyProfileUrl = mainInfoStatus === 'LOADED' ? `/employee/company/${mainInfo.company.id}` : '/';
  const company = <Link to={companyProfileUrl}>{mainInfoStatus === 'LOADED' ? mainInfo.company.name : '/'}</Link>;
  return (
    <div className="profile-header">
      <div className="overlay" />
      <div className="profile-main">
        <img alt="logo" src={logoUrl} className="img-responsive" />
        <h3 className="name">
          {mainInfoStatus === 'LOADED' ? mainInfo.name : ''}
        </h3>
          From {company}
      </div>
    </div>
  );
}

ProfileHeaderMain.propTypes = {
  mainInfo: PropTypes.object,
  mainInfoStatus: PropTypes.string,
};

export default ProfileHeaderMain;
