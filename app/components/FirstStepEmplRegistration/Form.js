import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { renderField } from '../../forms/fields/EmployeeRegisterFormField';
import { passwordValidation } from '../../forms/validation/PasswordValidation';
import { asyncValidate, emailValidation } from '../../forms/validation/EmailValidation';
import { required } from '../../forms/validation/RequiredValidation';

let EmployeeRegisterForm = (props) => {
  const { handleSubmit, submitFirstStep, submitting, email } = props
  return (
    <form onSubmit={handleSubmit(() => { submitFirstStep(email); })}>
      <h3>Employee</h3>
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

EmployeeRegisterForm = reduxForm({
  form: 'EmployeeRegisterFormFirstStep',
  asyncValidate,
  asyncBlurFields: ['email'],
})(EmployeeRegisterForm);

const selector = formValueSelector('EmployeeRegisterFormFirstStep');
EmployeeRegisterForm = connect(
  (state) => {
    const { email } = selector(state, 'firstName', 'lastName', 'email');
    return {
      email,
    };
  }
)(EmployeeRegisterForm);

EmployeeRegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitFirstStep: PropTypes.func,
  submitting: PropTypes.func,
  email: PropTypes.func,
};

export default EmployeeRegisterForm;
