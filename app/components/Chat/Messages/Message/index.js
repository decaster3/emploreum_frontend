/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { BASEURL } from '../../../../global-constants';
// import styled from 'styled-components';


export const Message = (props) => {
  const { interlocator, message, myId } = props;
  const photoPath = `${BASEURL}/${interlocator.logo}`;
  const isMyMessage = myId === message.userId;
  return (
    <div className={`chat-message ${isMyMessage ? 'right' : 'left'}`}>
      <img src={photoPath} alt="Avatar" className="message-avatar" />
      {isMyMessage ? message.status : <div />}
      <div className="message">
        <span>{interlocator.name}</span>
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
