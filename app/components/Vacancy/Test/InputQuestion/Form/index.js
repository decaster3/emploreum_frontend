import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../../forms/fields/FormVacancyCreationField';
import { required } from '../../../../../forms/validation/RequiredValidation';


const FormTestCreation = (props) => {
  const { handleSubmit, submittingQuestion, submitQuestion } = props;
  return (
    <form onSubmit={handleSubmit((values) => submitQuestion(values, 'input'))}>
      <div className="panel-body">
        <Field
          name="answer"
          component={renderField}
          validate={required}
          label="Your answer"
        />
      </div>
      <div className="panel-footer text-right">
        <button
          type="submit"
          style={{ marginRight: 10 }}
          className="btn btn-primary"
          disabled={submittingQuestion}
        >
          { submittingQuestion
            ? <SyncLoader color={'#ffffff'} size={5} />
            : <span>Submit</span>
          }
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'FormVacancyTestInputQuestion',
})(FormTestCreation);

FormTestCreation.propTypes = {
  handleSubmit: PropTypes.func,
  submittingQuestion: PropTypes.bool,
  submitQuestion: PropTypes.func,
};

