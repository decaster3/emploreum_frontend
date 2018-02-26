import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../../forms/fields/FormVacancyCreationField';

const FormTestCreation = (props) => {
  const { answers, handleSubmit, submittingQuestion, submitMultipleQuestion } = props;
  const answersView = answers.map((answer) => (
    <label key={answer.id}>
      <Field name={answer.name} component={renderField} type="checkbox" value="male" />
      {answer.name}
    </label>
  ));
  return (
    <form onSubmit={handleSubmit(submitMultipleQuestion)}>
      <div className="modal-body" >
        { answersView }
        <div className="col-xs-12 no-padding text-right padding-top-30">
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
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'FormVacancyTestMultipleQuestion',
})(FormTestCreation);

FormTestCreation.propTypes = {
  handleSubmit: PropTypes.func,
  answers: PropTypes.array,
  submittingQuestion: PropTypes.bool,
  submitMultipleQuestion: PropTypes.func,
};

