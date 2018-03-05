import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import { renderField } from '../../../../../forms/fields/Checkbox';

const FormTestCreation = (props) => {
  const { answers, handleSubmit, submittingQuestion, submitQuestion } = props;
  const answersView = answers.map((answer) => (
    <li key={answer.id}>
      <Field label="answer" name={answer.name} component={renderField} type="checkbox" value={answer.name} />
      <p><span className="short-description">{answer.name}</span></p>
    </li>
  ));

  return (
    <form onSubmit={handleSubmit((values) => submitQuestion(values, 'multipleChoice'))}>
      <div className="panel-body">
        <ul className="list-unstyled todo-list">
          { answersView }
        </ul>
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
  form: 'FormVacancyTestMultipleQuestion',
})(FormTestCreation);

FormTestCreation.propTypes = {
  handleSubmit: PropTypes.func,
  answers: PropTypes.array,
  submittingQuestion: PropTypes.bool,
  submitQuestion: PropTypes.func,
};

