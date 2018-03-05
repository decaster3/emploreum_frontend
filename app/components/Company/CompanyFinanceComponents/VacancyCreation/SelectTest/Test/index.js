/**
*
* Candidate
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export const Test = (props) => {
  const { test, chooseTest } = props;
  return (
    <li className="padding-bottom-30">
      <div>
        <span className="title inline" style={{ float: 'left' }}>{ test.name }</span>
        <button
          className="btn btn-success"
          style={{ float: 'right' }}
          data-dismiss="modal"
          onClick={() => chooseTest(test)}
        >
          Choose
        </button>
        <div className="clearfix" />
      </div>
    </li>
  );
};

Test.propTypes = {
  test: PropTypes.object,
  chooseTest: PropTypes.func,
};

export default Test;
