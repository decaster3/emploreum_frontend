import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

import { renderField } from '../../../forms/fields/FormRegisterField';
import { required } from '../../../forms/validation/RequiredValidation';

const FormRegisterSecondStep = (props) => {
  const { handleSubmit, submitEmailVerification, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submitEmailVerification)}>
      <h3>Employee</h3>
      <Field
        name="code"
        component={renderField}
        validate={required}
        label="Verification Email Code"
      />
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'FormRegisterSecondStep',
  // asyncValidate,
  // asyncBlurFields: ['code'],
})(FormRegisterSecondStep);

FormRegisterSecondStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitEmailVerification: PropTypes.func,
  submitting: PropTypes.func,
};

// const selector = formValueSelector('FormRegisterSecondStep');
// FormRegisterSecondStep = connect(
//   (state) => {
//     const code = selector(state, 'code');
//     return {
//       code,
//     };
//   }
// )(FormRegisterSecondStep);
