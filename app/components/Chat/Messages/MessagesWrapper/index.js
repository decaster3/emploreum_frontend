/**
*
* MessagesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const MessagesWrapper = (props) => {
  const { children } = props;
  return (
    <div className="col-md-9 ">
      <div className="chat-discussion">
        {children}
      </div>
    </div>
  );
};

MessagesWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MessagesWrapper;
