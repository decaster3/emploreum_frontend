/**
*
* ProfileHeaderMain
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../../../global-constants';

function ProfileHeaderMain(props) {
  const { mainInfo, mainInfoStatus } = props;
  const logoUrl = `${BASEURL}${mainInfo.photoPath}`;
  return (
    <div className="profile-header">
      <div className="overlay" />
      <div className="profile-main">
      <i className="fa text-avatar">{mainInfo.login.charAt(0).toUpperCase()}</i>
        <h3 className="name">
          {mainInfoStatus === 'LOADED' ? mainInfo.login : ''}
        </h3>
      </div>
    </div>
  );
}

ProfileHeaderMain.propTypes = {
  mainInfo: PropTypes.object,
  mainInfoStatus: PropTypes.string,
};

export default ProfileHeaderMain;
// <span className="online-status status-available">Видимость:всем</span>
