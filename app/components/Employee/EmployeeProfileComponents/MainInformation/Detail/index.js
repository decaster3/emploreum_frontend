/**
*
* Detail
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Detail(props) {
  const { mainInfo, mainInfoStatus } = props;
  return (
    <div className="profile-info">
      <h4 className="heading">Information</h4>
      <ul className="list-unstyled list-justify">
        <li>Email:<span>{mainInfoStatus === 'LOADED' ? mainInfo.user.email : ''}</span></li>
      </ul>
      <h4 className="heading">About</h4>
      <ul className="list-unstyled list-justify">
        <span>{mainInfoStatus === 'LOADED' ? mainInfo.about : ''}</span>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  mainInfo: PropTypes.object,
  mainInfoStatus: PropTypes.string,
};

export default Detail;
