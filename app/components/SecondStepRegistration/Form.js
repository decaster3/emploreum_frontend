import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { renderField } from '../../forms/fields/FormRegisterField';
import { required } from '../../forms/validation/RequiredValidation';
import { asyncValidate } from '../../forms/validation/VerificationEmailCode';

let FormRegisterSecondStep = (props) => {
  const { handleSubmit, submitSecondStep, submitting, code } = props;
  return (
    <form onSubmit={handleSubmit(() => { submitSecondStep(code); })}>
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

FormRegisterSecondStep = reduxForm({
  form: 'FormRegisterSecondStep',
  asyncValidate,
  asyncBlurFields: ['code'],
})(FormRegisterSecondStep);

FormRegisterSecondStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitSecondStep: PropTypes.func,
  submitting: PropTypes.func,
  code: PropTypes.string,
};

const selector = formValueSelector('FormRegisterSecondStep');
FormRegisterSecondStep = connect(
  (state) => {
    const code = selector(state, 'code');
    return {
      code,
    };
  }
)(FormRegisterSecondStep);

export default FormRegisterSecondStep;
