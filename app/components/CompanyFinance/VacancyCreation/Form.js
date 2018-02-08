import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../forms/fields/FormRegisterField';
import { required } from '../../../forms/validation/RequiredValidation';


const FormCreationVacancy = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="payment"
        component={renderField}
        validate={required}
        label="Payment"
      />
      <Field
        name="duration"
        component={renderField}
        validate={required}
        label="Duration"
      />
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={submitting}
      >
        { submitting
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
        }
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'FormCreationVacancy',
})(FormCreationVacancy);

FormCreationVacancy.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};
