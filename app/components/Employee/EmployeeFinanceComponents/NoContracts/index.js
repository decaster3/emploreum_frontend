/**
*
* NoContracts
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const NoContracts = (props) => {
  const { contractType } = props;
  const info = () => {
    switch (contractType) {
      case 'awaited':
        return <div className="fa-x5">Here you will see the vacancies for which you responded</div>;
      case 'current':
        return <div className="fa-x5">Here you will see the positions on which you work</div>;
      default:
        return <div className="fa-x5">Complete contracts will be displayed here</div>;
    }
  };
  return (
    <div className="col-md-12">
      <div className="panel">
        <h4 className="text-center">
          You have{'\''}t got {contractType} contracts yet.
        </h4>
        <hr />
        <div className="text-center">
          { info() }
        </div>
      </div>
    </div>
  );
};

NoContracts.propTypes = {
  contractType: PropTypes.string,
};

export default NoContracts;
