/**
*
* WrapperMainInformation
*
*/

import React from 'react';
// import styled from 'styled-components';

import Main from '../Main/Loadable';
import Detail from '../Detail/Loadable';
import Social from '../Social/Loadable';

class WrapperMainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="profile-left" id="profile-left-panel">
        <Main />
        <div className="profile-detail" id="sticky-social">
          <Detail />
          <Social />
        </div>
      </div>
    );
  }
}

WrapperMainInformation.propTypes = {

};

export default WrapperMainInformation;
