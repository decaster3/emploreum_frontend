import React from 'react';
import PropTypes from 'prop-types';
import { asyncValidate } from '../validation/EmailValidation';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label htmlFor="vacancy-eth" className="small">{label}</label>
    <div className={asyncValidate ? 'async-validate' : ''}>
      <input type="text" id="vacancy-eth" className="form-control" {...input} placeholder={label} type={type} />
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
