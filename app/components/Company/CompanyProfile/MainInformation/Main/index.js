/**
*
* ProfileHeaderMain
*
*/

import React from 'react';
import moment from 'moment/src/moment';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../../../global-constants';

function ProfileHeaderMain(props) {
  const { mainInfo, mainInfoStatus } = props;
  const logoUrl = `${BASEURL}${mainInfoStatus === 'LOADED' ? mainInfo.logo : '/'}`;
  const createdat = mainInfoStatus === 'LOADED' ? mainInfo.user.createdAt : '';
  const since = moment(createdat).format('LL');
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
          <div className="col-md-6 stat-item">
            {mainInfoStatus === 'LOADED' ? mainInfo.vacancies : ''}<span>vacancies</span>
          </div>
          <div className="col-md-6 stat-item">
            on Emploreum since {' '}
            {mainInfoStatus === 'LOADED'
              ? since
              : ''
            }
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
