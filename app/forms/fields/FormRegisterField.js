import React from 'react';
import PropTypes from 'prop-types';
import { asyncValidate } from '../validation/EmailValidation';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="control-label sr-only">{label}</label>
    <div className={asyncValidate ? 'async-validate' : ''}>
      <input className="form-control" {...input} placeholder={label} type={type} />
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
