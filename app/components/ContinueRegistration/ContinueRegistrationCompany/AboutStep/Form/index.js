import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import renderField from '../../../../../forms/fields/FormRegisterField';
import { renderTextarea } from '../../../../../forms/fields/TextAreaField';
import { required } from '../../../../../forms/validation/RequiredValidation';


const FormRegistrationFourthStep = (props) => {
  const { handleSubmit, submitAboutStep, submittingAbout } = props;
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
        component={renderTextarea}
        validate={required}
        label="About"
      />
      <button
        className="btn btn-primary btn-sm btn-block"
        type="submit"
        disabled={submittingAbout}
      >
        { submittingAbout
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
        }
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'FormRegistrationFourthStep',
})(FormRegistrationFourthStep);

FormRegistrationFourthStep.propTypes = {
  handleSubmit: PropTypes.func,
  submitAboutStep: PropTypes.func,
  submittingAbout: PropTypes.bool,
};
