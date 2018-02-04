import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { renderField } from '../../forms/fields/FormRegisterField';
import { required } from '../../forms/validation/RequiredValidation';


let FormRegistrationFourthStep = (props) => {
  const { role, handleSubmit, submitFourthStep, submitting, name, about } = props
  return (
    <form onSubmit={handleSubmit(() => { submitFourthStep(name, about); })}>
      <h2>{role}</h2>
      <Field
        name="name"
        component={renderField}
        validate={required}
        label="Name"
      />
      <Field
        name="about"
        type="about"
        component={renderField}
        validate={required}
        label="About"
      />
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

FormRegistrationFourthStep = reduxForm({
  form: 'FormRegistrationFourthStep',
})(FormRegistrationFourthStep);

const selector = formValueSelector('FormRegistrationFourthStep');
FormRegistrationFourthStep = connect(
  (state) => {
    const { name, about } = selector(state, 'about', 'firstName', 'name');
    return {
      name,
      about
    };
  }
)(FormRegistrationFourthStep);

FormRegistrationFourthStep.propTypes = {
  role: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitFourthStep: PropTypes.func,
  submitting: PropTypes.func,
  name: PropTypes.func,
};

export default FormRegistrationFourthStep;
