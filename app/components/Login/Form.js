import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { renderField } from '../../forms/fields/FormRegisterField';
import { passwordValidation } from '../../forms/validation/PasswordValidation';
import { emailValidation } from '../../forms/validation/EmailValidation';
import { required } from '../../forms/validation/RequiredValidation';


const FormLogin = (props) => {
  const { handleSubmit, login, submitting } = props;
  return (
    <form onSubmit={handleSubmit(login)}>
      <h3>Login</h3>
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
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'FormLogin',
})(FormLogin);

// NOTE: for vorm value in that form

// const selector = formValueSelector('FormLogin');
// FormLogin = connect(
//   (state) => {
//     const { email, password } = selector(state, 'firstName', 'email', 'password');
//     return {
//       email,
//       password,
//     };
//   }
// )(FormLogin);

FormLogin.propTypes = {
  handleSubmit: PropTypes.func,
  login: PropTypes.func,
  submitting: PropTypes.bool,
};
