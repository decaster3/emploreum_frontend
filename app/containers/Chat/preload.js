import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from './index';
import AsyncLink from './../../AsyncLink';

export const isChatLoading = (state) => {
  let isLoading = true;
  if (state.get('chatInterlocators')) {
    const chatInterlocators = state.get('chatInterlocators').get('interlocators').get('status');
    if (chatInterlocators === 'LOADED') {
      isLoading = false;
    }
  }
  return isLoading;
};

export const ChatLinkLink = (props) => {
  const placeholder = <Chat />;
  return (
    <AsyncLink loading={props.isChatLoading} placeholder={placeholder} to={props.url} className={props.classname}>
      {props.children}
    </AsyncLink>
  );
};

ChatLinkLink.propTypes = {
  isChatLoading: PropTypes.bool,
  url: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    isChatLoading: isChatLoading(state),
  };
}

export default connect(mapStateToProps, null)(ChatLinkLink);
