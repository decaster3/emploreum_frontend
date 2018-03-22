/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  }
  clearMessage() {
    this.setState({
      message: '',
    });
  }
  render() {
    return (
      <div className="col-lg-12 no-padding">
        <div className="chat-message-form">
          <div className="form-group">
            <div className="col-md-9">
              <textarea
                className="form-control message-input"
                onChange={this.handleChange}
                name="message"
                value={this.state.message}
                placeholder="Enter message text"
              />
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-default col-lg-12"
                onClick={() => {
                  this.props.sendMessage(this.state.message);
                  this.clearMessage();
                }}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  sendMessage: PropTypes.func,
};

export default Message;
