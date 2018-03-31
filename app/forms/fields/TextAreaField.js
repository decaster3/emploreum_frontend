import React from 'react';
import PropTypes from 'prop-types';

export const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <textarea className="form-control" {...input} placeholder={label} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

renderTextarea.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};
