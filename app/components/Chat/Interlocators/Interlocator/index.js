/**
*
* Interlocator
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../../../global-constants';

export const Interlocator = (props) => {
  const { interlocator, changeCurrentInterlocator } = props;
  const photoPath = `${BASEURL}/${interlocator.logo}`;
  const linkToChat = `${interlocator.id}`;
  return (
    <div className="chat-user">
      <img src={photoPath} alt="Avatar" className="message-avatar" />
      <div className="chat-user-name">
        <Link to={linkToChat} onClick={() => changeCurrentInterlocator(interlocator)} >
          { interlocator.name }
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
