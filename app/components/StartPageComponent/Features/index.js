/**
*
* Features
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';

function Features(props) {
  return (
    <div className="col-xs-12 col-md-10 col-md-offset-1" id="info">
      <div className="row">
        <div className="col-sm-6 info-item">
          <h3>Who we are for employee</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam dolore laboriosam libero maxime neque nisi nostrum
            officia, pariatur voluptates. Delectus deserunt esse,
            molestias neque repellat voluptates. Aliquid eum totam vel!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam dolore laboriosam libero maxime neque nisi nostrum
            officia, pariatur voluptates. Delectus deserunt esse,
            molestias neque repellat voluptates. Aliquid eum totam vel!
          </p>
          <div className="border"></div>
        </div>
        <div className="col-sm-6 info-item">
          <h3>Who we are for Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam dolore laboriosam libero maxime neque nisi nostrum
            officia, pariatur voluptates. Delectus deserunt esse,
            molestias neque repellat voluptates. Aliquid eum totam vel!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam dolore laboriosam libero maxime neque nisi nostrum
            officia, pariatur voluptates. Delectus deserunt esse,
            molestias neque repellat voluptates. Aliquid eum totam vel!
          </p>
        </div>
      </div>
    </div>
  );
}

Features.propTypes = {
  mainInfoStatus: PropTypes.string,
};

export default Features;
