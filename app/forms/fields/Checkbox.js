import React from 'react';
import PropTypes from 'prop-types';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <label htmlFor={label} className="control-inline fancy-checkbox">
    <input {...input} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    <span />
  </label>
);

renderField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};
