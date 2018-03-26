/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';

function Footer(props) {
  return (
    <div className="col-xs-12" id="footer">
      <div className="footer-bs col-xs-12 col-md-8 col-md-offset-2">
        <div className="row">
          <div className="hidden-xs col-sm-4 footer-brand">
            <h2>Emploreum</h2>
            <p>
              T is the most developing region in the world. The search for
              qualified employees requires tremendous efforts. We break the
              recruitment industry
            </p>
            <p>© 2017 All rights reserved</p>
          </div>
          <div className="col-xs-6 col-sm-4 footer-nav">
            <h4>Menu —</h4>
            <ul className="pages">
              <li className="menu-target" data-target="#window"><a href="#">about</a></li>
              <li className="menu-target" data-target=".team-style"><a href="#">search</a></li>
              <li className="menu-target" data-target=".team-style"><a href="#">contact</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-4 footer-social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">RSS</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default Footer;
