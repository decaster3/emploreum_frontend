/**
 *
 * InterlocatorsContainerContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectInterlocatorsItems,
  selectInterlocatorsStatus,
  selectIsThereInterlocators,
  selectCurrentInterlocator,
  selectCurrentInterlocatorStatus,
} from './selectors';
import reducer from './reducer';

import MessagesCanvas from '../MessagesCanvas';
import Interlocator from '../../../components/Chat/Interlocators/Interlocator';
import InterlocatorsWrapper from '../../../components/Chat/Interlocators/InterlocatorsWrapper';
import NoInterlocators from '../../../components/Chat/Interlocators/NoInterlocators';
import ChatNotChoosen from '../../../components/Chat/Messages/ChatNotChoosen';
import SendMessage from '../SendMessage';

import { getInterlocators, changeCurrentInterlocator } from './actions';

export class InterlocatorsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.chatId) {
      this.props.getInterlocators(this.props.chatId);
    } else {
      this.props.getInterlocators();
    }
  }

  renderInterlocators() {
    if (this.props.interlocatorsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.interlocatorsItems.map((interlocator) =>
      (<Interlocator
        key={interlocator.id}
        interlocator={interlocator}
        changeCurrentInterlocator={this.props.changeCurrentInterlocator}
      />)
    );
  }
  renderMessages() {
    switch (this.props.currentInterlocatorStatus) {
      case 'LOADING':
        return <div />;
      case 'NOT_CHOOSEN':
        return <ChatNotChoosen />;
      case 'CHOOSEN':
        return <MessagesCanvas currentInterlocator={this.props.currentInterlocator} />;
      default:
        return <div />;
    }
  }

  render() {
    const interlocatorsItems = this.renderInterlocators();
    const messages = this.renderMessages();
    let interlocators = null;
    if (!this.props.selectIsThereInterlocators && this.props.interlocatorsStatus === 'LOADED') {
      interlocators = <NoInterlocators />;
    } else {
      interlocators = (
        <InterlocatorsWrapper>
          {interlocatorsItems}
        </InterlocatorsWrapper>
      );
    }
    return (
      <div className="row">
        { messages }
        { interlocators }
        {this.props.currentInterlocator.id
        ? (
          <div>
            <div className="clearfix" />
            <SendMessage />
          </div>)
        : <div />
        }
      </div>
    );
  }
}

InterlocatorsContainer.propTypes = {
  chatId: PropTypes.string,
  getInterlocators: PropTypes.func.isRequired,
  changeCurrentInterlocator: PropTypes.func.isRequired,
  interlocatorsItems: PropTypes.array,
  interlocatorsStatus: PropTypes.string,
  selectIsThereInterlocators: PropTypes.bool,
  currentInterlocator: PropTypes.object,
  currentInterlocatorStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    interlocatorsItems: selectInterlocatorsItems(state),
    interlocatorsStatus: selectInterlocatorsStatus(state),
    selectIsThereInterlocators: selectIsThereInterlocators(state),
    currentInterlocator: selectCurrentInterlocator(state),
    currentInterlocatorStatus: selectCurrentInterlocatorStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getInterlocators: (evt) => dispatch(getInterlocators(evt)),
    changeCurrentInterlocator: (evt) => dispatch(changeCurrentInterlocator(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chatInterlocators', reducer });

export default compose(
  withReducer,
  withConnect,
)(InterlocatorsContainer);
