/**
*
* Currency
*
*/
import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';

export const Currency = (props) => {
  const { name } = props;
  return (
    <span className="label label-primary">{ name }</span>
  );
};

Currency.propTypes = {
  name: PropTypes.string,
};

export default Currency;
