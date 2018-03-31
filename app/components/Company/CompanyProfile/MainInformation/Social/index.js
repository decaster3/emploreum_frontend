/**
*
* ProfileHeaderSocial
*
*/

import React from 'react';
// import styled from 'styled-components';

function ProfileHeaderSocial() {
  return (
    <div className="profile-info">
      <h4 className="heading">Social</h4>
      <ul className="list-inline social-icons">
        <li><a href="" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
        <li><a href="" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
        <li><a href="" className="google-plus-bg"><i className="fa fa-google-plus"></i></a>
        </li>
        <li><a href="" className="github-bg"><i className="fa fa-github"></i></a></li>
      </ul>
    </div>
  );
}

ProfileHeaderSocial.propTypes = {

};

export default ProfileHeaderSocial;
