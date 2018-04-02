/**
*
* Detail
*
*/

import React from 'react';
import PropTypes from 'prop-types';

function Detail(props) {
  const { mainInfo } = props;
  return (
    <div className="profile-info">
      <h4 className="heading">Information</h4>
      <ul className="list-unstyled list-justify">
        <li>Email:<span>{mainInfo.user.email}</span></li>
      </ul>
      <h4 className="heading">About</h4>
      <ul className="list-unstyled list-justify">
        <span>{mainInfo.about}</span>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  mainInfo: PropTypes.object,
};

export default Detail;
