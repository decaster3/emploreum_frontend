/**
*
* Interlocator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { BASEURL } from '../../../../global-constants';

export const Interlocator = (props) => {
  const { interlocator, changeCurrentInterlocator } = props;
  // const photoPath = `${BASEURL}/${interlocator.logo}`;
  const linkToChat = `${interlocator.id}`;
  const nameOfChat = interlocator.is_group ? interlocator.name : interlocator.login;
  return (
    <div className="chat-user">
      {/* <img src={photoPath} alt="Avatar" className="message-avatar" /> */}
      <i className="fa message-avatar">{nameOfChat.charAt(0).toUpperCase()}</i>
      <div className="chat-user-name">
        <Link to={linkToChat} onClick={() => changeCurrentInterlocator(interlocator)} >
          { nameOfChat }
        </Link>
      </div>
    </div>
  );
};
Interlocator.propTypes = {
  interlocator: PropTypes.object,
  changeCurrentInterlocator: PropTypes.func,
};

export default Interlocator;
