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
        <img alt="logo" src={logoUrl} className="img-responsive" />
        <h3 className="name">
          {mainInfoStatus === 'LOADED' ? mainInfo.name : ''}
        </h3>
      </div>
      <div className="profile-stat" id="sticky-rating">
        <div className="row">
          <div className="col-md-12 stat-item">
            5<span> skills</span>
          </div>
        </div>
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
