/**
 *
 * BlockchainStatus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import { getBlockchainAsynkActions, listenAsyncActions } from './actions';
import {
  selectAsyncBlockchainMessage,
  selectAsyncBlockchainActionsCount,
 } from './selectors';
import reducer from './reducer';

import BlockchainStatusBar from '../../../components/Header/BlockchainStatus/Loadable';

export class BlockchainStatus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.listenAsyncActions();
  }
  render() {
    return (
      <BlockchainStatusBar
        asyncBlockchainMessage={this.props.asyncBlockchainMessage}
        asyncBlockchainActionsCount={this.props.asyncBlockchainActionsCount}
      />
    );
  }
}

BlockchainStatus.propTypes = {
  listenAsyncActions: PropTypes.func.isRequired,
  asyncBlockchainMessage: PropTypes.string,
  asyncBlockchainActionsCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    asyncBlockchainMessage: selectAsyncBlockchainMessage(state),
    asyncBlockchainActionsCount: selectAsyncBlockchainActionsCount(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlockchainAsynkActions: () => dispatch(getBlockchainAsynkActions()),
    listenAsyncActions: () => dispatch(listenAsyncActions()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blockchainStatus', reducer });

export default compose(
  withReducer,
  withConnect,
)(BlockchainStatus);
