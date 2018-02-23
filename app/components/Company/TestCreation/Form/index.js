import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../forms/fields/FormVacancyCreationField';
import { required } from '../../../../forms/validation/RequiredValidation';


const FormTestCreation = (props) => {
  const { handleSubmit, submittingTestCreationButtonState, createTest } = props;
  return (
    <form onSubmit={handleSubmit(createTest)}>
      <div className="modal-body" >
        <Field
          name="testName"
          component={renderField}
          validate={required}
          label="Test name"
        />
        <div className="col-xs-12 no-padding text-right padding-top-30">
          <button
            type="submit"
            style={{ marginRight: 10 }}
            className="btn btn-primary"
            disabled={submittingTestCreationButtonState}
          >
            { submittingTestCreationButtonState
              ? <SyncLoader color={'#ffffff'} size={5} />
              : <span>Submit</span>
            }
          </button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'FormTestCreation',
})(FormTestCreation);

FormTestCreation.propTypes = {
  handleSubmit: PropTypes.func,
  submittingTestCreationButtonState: PropTypes.bool,
  createTest: PropTypes.func,
};

