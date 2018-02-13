import React from 'react';
import PropTypes from 'prop-types';

export const FinanceHeader = (props) => {
  const { address, addressStatus } = props;

  return (
    <div className="panel panel-headline">
      <div className="panel-heading">
        <h3 className="panel-title">
          Ethereum address: {addressStatus === 'LOADED' ? address : ''}
        </h3>
      </div>
      <div className="panel-body padding-bottom-30">
        {props.children}
      </div>
    </div>

  );
};

FinanceHeader.propTypes = {
  address: PropTypes.string.isRequired,
  addressStatus: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FinanceHeader;
