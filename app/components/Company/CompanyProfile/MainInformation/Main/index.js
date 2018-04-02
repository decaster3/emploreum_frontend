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
  const { mainInfo } = props;
  const logoUrl = `${BASEURL}${mainInfo.logo}`;
  const createdat = mainInfo.user.createdAt;
  const since = moment(createdat).format('LL');
  return (
    <div className="profile-header">
      <div className="overlay" />
      <div className="profile-main">
        <img alt="logo" src={logoUrl} className="img-responsive" />
        <h3 className="name">
          { mainInfo.name }
        </h3>
      </div>
      <div className="profile-stat" id="sticky-rating">
        <div className="row">
          <div className="col-md-6 stat-item">
            { mainInfo.vacancies }<span>vacancies</span>
          </div>
          <div className="col-md-6 stat-item">
            on Emploreum since {` ${since}`}
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileHeaderMain.propTypes = {
  mainInfo: PropTypes.object,
};

export default ProfileHeaderMain;
// <span className="online-status status-available">Видимость:всем</span>
