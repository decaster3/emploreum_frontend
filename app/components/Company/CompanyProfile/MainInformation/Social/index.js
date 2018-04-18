/**
*
* ProfileHeaderSocial
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function ProfileHeaderSocial() {
  return (
    <div className="profile-info">
      <h4 className="heading">Social</h4>
      <ul className="list-inline social-icons">
        <li><Link to="" className="facebook-bg"> <i className="fa fa-facebook" /></Link></li>
        <li><Link to="" className="twitter-bg"> <i className="fa fa-twitter" /></Link></li>
        <li><Link to="" className="google-plus-bg"> <i className="fa fa-google-plus" /></Link>
        </li>
        <li><Link to="" className="github-bg"> <i className="fa fa-github" /></Link></li>
      </ul>
    </div>
  );
}

ProfileHeaderSocial.propTypes = {

};

export default ProfileHeaderSocial;
