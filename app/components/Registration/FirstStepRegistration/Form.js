import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { renderField } from '../../../forms/fields/FormRegisterField';
import { passwordValidation, passwordMatch } from '../../../forms/validation/PasswordValidation';
import { asyncValidate, emailValidation } from '../../../forms/validation/EmailValidation';
import { required } from '../../../forms/validation/RequiredValidation';


const FormRegisterFirstStep = (props) => {
  const { handleSubmit, submitEmail, submitting } = props;
  return (
    <form className="form-auth-small" onSubmit={handleSubmit(submitEmail)}>
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
      <button className="btn btn-primary btn-sm btn-block" type="submit" disabled={submitting}>Submit</button>
      <Link to="/login" className="btn btn-default btn-xs btn-block">Login</Link>
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
  handleSubmit: PropTypes.func,
  submitEmail: PropTypes.func,
  submitting: PropTypes.bool,
};
