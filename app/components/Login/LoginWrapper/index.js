/**
*
* LoginWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const LoginWrapper = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="vertical-align-wrap">
        <div className="vertical-align-middle">
          <div className="auth-box">
            <div className="left">
              <div className="content">
                <div className="header">
                </div>
                <div>
                  { children }
                </div>
              </div>
            </div>
            <div className="right">
              <div className="overlay"></div>
              <div className="content text">
                <h1 className="heading">Be the company of the future</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoginWrapper;
