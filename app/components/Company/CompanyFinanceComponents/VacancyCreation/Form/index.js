import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../../forms/fields/FormVacancyCreationField';
import { required } from '../../../../../forms/validation/RequiredValidation';


const FormCreationVacancy = (props) => {
  const { handleSubmit, submitting, createVacancy } = props;
  return (
    <form onSubmit={handleSubmit(createVacancy)}>
      <Field
        name="weekPayment"
        component={renderField}
        validate={required}
        label="Week Payment"
      />
      <Field
        name="duration"
        component={renderField}
        validate={required}
        label="Duration"
      />
      <div className="col-xs-12 no-padding text-right padding-top-30">
        <button
          type="submit"
          style={{ marginRight: 10 }}
          className="btn btn-primary"
          disabled={submitting}
        >
          { submitting
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
          }
        </button>
        <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'FormCreationVacancy',
})(FormCreationVacancy);

FormCreationVacancy.propTypes = {
  handleSubmit: PropTypes.func,
  createVacancy: PropTypes.func,
  submitting: PropTypes.bool,
};
