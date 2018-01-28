import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { renderField } from '../../forms/fields/EmployeeRegisterFormField';
import { required } from '../../forms/validation/RequiredValidation';
import { asyncValidate } from '../../forms/validation/VerificationEmailCode';

let EmployeeRegisterForm = (props) => {
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

EmployeeRegisterForm = reduxForm({
  form: 'EmployeeRegisterFormSecondStep',
  asyncValidate,
  asyncBlurFields: ['code'],
})(EmployeeRegisterForm);

EmployeeRegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitSecondStep: PropTypes.func,
  submitting: PropTypes.func,
  code: PropTypes.string,
};

const selector = formValueSelector('EmployeeRegisterFormSecondStep');
EmployeeRegisterForm = connect(
  (state) => {
    const code = selector(state, 'code');
    return {
      code,
    };
  }
)(EmployeeRegisterForm);

export default EmployeeRegisterForm;
