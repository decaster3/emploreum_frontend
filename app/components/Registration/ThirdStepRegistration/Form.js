import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import renderField from '../../../forms/fields/FormRegisterField';
import { required } from '../../../forms/validation/RequiredValidation';
import { loginValidation } from '../../../forms/validation/VerificationEmailCode';

const LoginForm = (props) => {
  const { handleSubmit,
    addLogin,
    pending,
    downRegistrationStep,
    error } = props;
  return (
    <form onSubmit={handleSubmit(addLogin)}>
      <Field
        name="login"
        component={renderField}
        validate={[required, loginValidation]}
        label="Login"
      />
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={pending}
      >
        {error && <strong>{error}</strong>}
        { pending
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
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  addLogin: PropTypes.func,
  downRegistrationStep: PropTypes.func,
  pending: PropTypes.bool,
  error: PropTypes.string,
};
