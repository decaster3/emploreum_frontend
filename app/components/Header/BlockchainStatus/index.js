/**
*
* BlockchainStatus
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components'; BounceLoader
import { BounceLoader } from 'react-spinners';

class BlockchainStatus extends React.Component {
  componentDidMount() {
    // $('#blockchainLoader').tooltip();
  }
  render() {
    if (this.props.asyncBlockchainActionsCount > 0) {
      return (
        <li className="dropdown">
          <span
            id="blockchainLoader"
            className="icon-menu"
            data-toggle="tooltip"
            data-placement="bottom"
            title={this.props.asyncBlockchainMessage}
          >
            <BounceLoader color={'#0081c2'} size={20} />
          </span>
        </li>
      );
    }
    return (
      <li />
    );
  }
}

BlockchainStatus.propTypes = {
  asyncBlockchainMessage: PropTypes.string,
  asyncBlockchainActionsCount: PropTypes.number,
};

export default BlockchainStatus;
