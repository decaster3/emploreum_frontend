/**
*
* ProfileHeaderMain
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileHeaderMain(props) {
  const { mainInfo, mainInfoStatus } = props;
  return (
    <div className="profile-header">
      <div className="overlay" />
      <div className="profile-main">
        <i className="fa text-avatar"></i>
        <h3 className="name">
          {mainInfoStatus === 'LOADED' ? mainInfo.name : ''}
        </h3>
        <span className="online-status status-available">Видимость:всем</span>
      </div>
      <div className="profile-stat" id="sticky-rating">
        <div className="row">
          <div className="col-md-4 stat-item">
                5 <span>навыков</span>
          </div>
          <div className="col-md-4 stat-item">
                20 <span>тестов</span>
          </div>
          <div className="col-md-4 stat-item">
            <span>5 <i className="fa fa-dollar"></i> </span>
            <span>Мин. З.П.</span>
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
