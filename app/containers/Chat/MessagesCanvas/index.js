/**
 *
 * MessagesCanvasContainerContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectMessagesItems,
  selectMessagesStatus,
  selectIsThereMessages,
  selectMyId,
} from './selectors';
import reducer from './reducer';

import Message from '../../../components/Chat/Messages/Message/Loadable';
import MessagesWrapper from '../../../components/Chat/Messages/MessagesWrapper/Loadable';
import NoMessages from '../../../components/Chat/Messages/NoMessages';

import { getMessages, listenForNewMessages } from './actions';

export class MessagesCanvasContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getMessages();
    this.props.listenForNewMessages();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currentInterlocator && nextProps.currentInterlocator.id !== this.props.currentInterlocator.id) {
      this.props.getMessages();
    }
  }

  renderMessages() {
    if (this.props.messagesStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.messagesItems.map((message) =>
      (<Message
        key={message.id}
        message={message}
        myId={this.props.myId}
        interlocator={this.props.currentInterlocator}
      />)
    );
  }
  // interaptorLogo, interaptorName, timestamp, text
  render() {
    const messages = this.renderMessages();
    if (!this.props.selectIsThereMessages && this.props.messagesStatus === 'LOADED') {
      return <NoMessages />;
    }
    return (
      <MessagesWrapper>
        {messages}
      </MessagesWrapper>
    );
  }
}

MessagesCanvasContainer.propTypes = {
  getMessages: PropTypes.func.isRequired,
  listenForNewMessages: PropTypes.func.isRequired,
  currentInterlocator: PropTypes.object,
  messagesItems: PropTypes.array,
  messagesStatus: PropTypes.string,
  selectIsThereMessages: PropTypes.bool,
  myId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    messagesItems: selectMessagesItems(state),
    messagesStatus: selectMessagesStatus(state),
    selectIsThereMessages: selectIsThereMessages(state),
    myId: selectMyId(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(getMessages()),
    listenForNewMessages: () => dispatch(listenForNewMessages()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chatMessages', reducer });

export default compose(
  withReducer,
  withConnect,
)(MessagesCanvasContainer);
