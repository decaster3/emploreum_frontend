import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { renderField } from '../../../forms/fields/FormRegisterField';
import { passwordValidation, passwordMatch } from '../../../forms/validation/PasswordValidation';
import { asyncValidate, emailValidation } from '../../../forms/validation/EmailValidation';
import { required } from '../../../forms/validation/RequiredValidation';


const FormRegisterFirstStep = (props) => {
  const { role, handleSubmit, submitEmail, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submitEmail)}>
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

export default reduxForm({
  form: 'FormRegisterFirstStep',
  validate: passwordMatch,
  asyncValidate,
  asyncBlurFields: ['email'],
})(FormRegisterFirstStep);

// const selector = formValueSelector('FormRegisterFirstStep');
// FormRegisterFirstStep = connect(
//   (state) => {
//     const { email } = selector(state, 'firstName', 'email');
//     return {
//       email,
//     };
//   }
// )(FormRegisterFirstStep);

FormRegisterFirstStep.propTypes = {
  role: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitEmail: PropTypes.func,
  submitting: PropTypes.func,
};
