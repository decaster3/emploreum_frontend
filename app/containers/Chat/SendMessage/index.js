/**
 *
 * SendMessageContainerContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sendMessage } from './actions';

import SendMessage from '../../../components/Chat/SendMessage';

export class SendMessageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SendMessage sendMessage={this.props.sendMessage} />
    );
  }
}

SendMessageContainer.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (evt) => dispatch(sendMessage(evt)),
  };
}

export default connect(null, mapDispatchToProps)(SendMessageContainer);
