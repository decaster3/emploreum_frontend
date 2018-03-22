import React from 'react';
import PropTypes from 'prop-types';
import Interlocators from './Interlocators/Loadable';

export const ChatCreator = (props) => (
  <div className="col-lg-12">
    <div className="chat-view">
      <Interlocators chatId={props.match.params.chatId} />
    </div>
  </div>
);
ChatCreator.propTypes = {
  match: PropTypes.object,
};

export default ChatCreator;
