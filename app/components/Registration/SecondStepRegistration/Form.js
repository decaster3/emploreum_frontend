import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import { renderField } from '../../../forms/fields/FormRegisterField';
import { required } from '../../../forms/validation/RequiredValidation';
import { verificationEmailCodeValidation } from '../../../forms/validation/VerificationEmailCode';

const FormRegisterSecondStep = (props) => {
  const { handleSubmit,
    submitEmailVerification,
    submittingEmailVerification,
    downRegistrationStep,
    role,
    error, } = props;
  return (
    <form onSubmit={handleSubmit(submitEmailVerification)}>
      <h3>{role}</h3>
      <Field
        name="code"
        component={renderField}
        validate={[required, verificationEmailCodeValidation]}
        label="Verification Email Code"
      />
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={submittingEmailVerification}
      >
        {error && <strong>{error}</strong>}
        { submittingEmailVerification
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
        }
      </button>
      <button onClick={() => downRegistrationStep()} className="btn btn-default btn-xs btn-block">Back</button>
    </form>
  );
};

export default reduxForm({
  form: 'FormRegisterSecondStep',
})(FormRegisterSecondStep);

FormRegisterSecondStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitEmailVerification: PropTypes.func,
  downRegistrationStep: PropTypes.func,
  submittingEmailVerification: PropTypes.bool,
  role: PropTypes.string,
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
