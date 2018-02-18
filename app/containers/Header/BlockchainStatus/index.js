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

import { getBlockchainAsynkActions } from './actions';
import {
  selectAsyncBlockchainMessage,
  selectAsyncBlockchainActionsCount,
 } from './selectors';
import reducer from './reducer';

import BlockchainStatusBar from '../../../components/Header/BlockchainStatus/Loadable';

export class BlockchainStatus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getBlockchainAsynkActions();
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
  getBlockchainAsynkActions: PropTypes.func.isRequired,
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
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blockchainStatus', reducer });

export default compose(
  withReducer,
  withConnect,
)(BlockchainStatus);
