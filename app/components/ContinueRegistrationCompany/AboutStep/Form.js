import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { renderField } from '../../../forms/fields/FormRegisterField';
import { required } from '../../../forms/validation/RequiredValidation';


const FormRegistrationFourthStep = (props) => {
  const { handleSubmit, submitAboutStep, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submitAboutStep)}>
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

export default reduxForm({
  form: 'FormRegistrationFourthStep',
})(FormRegistrationFourthStep);

// const selector = formValueSelector('FormRegistrationFourthStep');
// FormRegistrationFourthStep = connect(
//   (state) => {
//     const { name, about } = selector(state, 'about', 'firstName', 'name');
//     return {
//       name,
//       about
//     };
//   }
// )(FormRegistrationFourthStep);

FormRegistrationFourthStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitAboutStep: PropTypes.func,
  submitting: PropTypes.bool,
};
