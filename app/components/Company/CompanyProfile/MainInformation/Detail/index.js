/**
*
* Detail
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';


function Detail(props) {
  const { mainInfo, mainInfoStatus } = props;
  return (
    <div className="profile-info">
      <h4 className="heading">Information</h4>
      <ul className="list-unstyled list-justify">
        <li>Email:<span>{mainInfoStatus === 'LOADED' ? mainInfo.user.email : ''}</span></li>
      </ul>
    </div>
  );
}

Detail.propTypes = {
  mainInfo: PropTypes.object,
  mainInfoStatus: PropTypes.string,
};

export default Detail;
