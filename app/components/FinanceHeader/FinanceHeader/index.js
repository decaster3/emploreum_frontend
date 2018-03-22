import React from 'react';
import PropTypes from 'prop-types';

export const FinanceHeader = (props) => {
  const { address, mainInformationStatus } = props;

  return (
    <div className="panel panel-headline">
      <div className="panel-heading">
        <h3 className="panel-title">
          Ethereum address: {mainInformationStatus === 'LOADED' ? address : ''}
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
  mainInformationStatus: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FinanceHeader;
