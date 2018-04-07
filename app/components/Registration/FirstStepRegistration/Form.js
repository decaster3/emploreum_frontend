import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import renderField from '../../../forms/fields/FormRegisterField';
import { emailValidation } from '../../../forms/validation/EmailValidation';
import { required } from '../../../forms/validation/RequiredValidation';


const FormRegisterFirstStep = (props) => {
  const { handleSubmit, submitEmail, submittingButton, error } = props;
  return (
    <form className="form-auth-small" onSubmit={handleSubmit(submitEmail)}>
      <Field
        name="email"
        component={renderField}
        validate={[emailValidation, required]}
        label="Email"
      />
      {error && <strong>{error}</strong>}
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={submittingButton}
      >
        { submittingButton
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
        }
      </button>
      <Link to="/" className="btn btn-default btn-xs btn-block">Cancel</Link>
    </form>
  );
};

export default reduxForm({
  form: 'FormRegisterFirstStep',
})(FormRegisterFirstStep);

FormRegisterFirstStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitEmail: PropTypes.func,
  submittingButton: PropTypes.bool,
  error: PropTypes.string,
};
