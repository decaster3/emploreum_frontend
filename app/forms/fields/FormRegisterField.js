import React from 'react';
import PropTypes from 'prop-types';
import { asyncValidate } from '../validation/EmailValidation';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidate ? 'async-validate' : ''}>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

renderField.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};
