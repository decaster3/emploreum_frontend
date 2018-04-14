/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { BASEURL } from '../../../../global-constants';
// import styled from 'styled-components';


export const Message = (props) => {
  const { interlocator, message, myId } = props;
  // const photoPath = `${BASEURL}/${interlocator.logo}`;
  const isMyMessage = myId === message.senderId;
  return (
    <div className={`chat-message ${isMyMessage ? 'right' : 'left'}`}>
      <i className="fa text-avatar message-avatar">{ message.name.charAt(0).toUpperCase() }</i>
      {isMyMessage ? message.status : <div />}
      <div className="message">
        <span>{isMyMessage ? '' : interlocator.name}</span>
        <span className="message-date">{message.createdAt}</span>
        <span className="message-content">
          {message.text}
        </span>
      </div>
    </div>
  );
};

Message.propTypes = {
  interlocator: PropTypes.object,
  myId: PropTypes.string,
  message: PropTypes.object,
};

export default Message;
