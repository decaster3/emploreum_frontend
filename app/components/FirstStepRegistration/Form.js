import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { renderField } from '../../forms/fields/FormRegisterField';
import { passwordValidation, passwordMatch } from '../../forms/validation/PasswordValidation';
import { asyncValidate, emailValidation } from '../../forms/validation/EmailValidation';
import { required } from '../../forms/validation/RequiredValidation';


let FormRegisterFirstStep = (props) => {
  const { role, handleSubmit, submitFirstStep, submitting, email } = props
  return (
    <form onSubmit={handleSubmit(() => { submitFirstStep(email); })}>
      <h3>{role}</h3>
      <Field
        name="email"
        component={renderField}
        validate={[emailValidation, required]}
        label="Email"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        validate={[required, passwordValidation]}
        label="Password"
      />
      <Field
        name="passwordConfirmation"
        type="password"
        component={renderField}
        validate={[required, passwordValidation]}
        label="Confirm password"
      />
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

FormRegisterFirstStep = reduxForm({
  form: 'FormRegisterFirstStep',
  validate: passwordMatch,
  asyncValidate,
  asyncBlurFields: ['email'],
})(FormRegisterFirstStep);

const selector = formValueSelector('FormRegisterFirstStep');
FormRegisterFirstStep = connect(
  (state) => {
    const { email } = selector(state, 'firstName', 'email');
    return {
      email,
    };
  }
)(FormRegisterFirstStep);

FormRegisterFirstStep.propTypes = {
  role: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitFirstStep: PropTypes.func,
  submitting: PropTypes.func,
  email: PropTypes.func,
};

export default FormRegisterFirstStep;
