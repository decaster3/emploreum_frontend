/**
*
* About
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const About = (props) => {
  const { about } = props;
  return (
    <div>
      <h4 className="heading">About company</h4>
      <div className="row">
        <p>{about}</p>
      </div>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.string,
};

export default About;
