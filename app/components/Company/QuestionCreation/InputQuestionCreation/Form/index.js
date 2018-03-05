import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../../forms/fields/FormVacancyCreationField';
import { required } from '../../../../../forms/validation/RequiredValidation';


const FormTestCreation = (props) => {
  const {
    handleSubmit,
    submittingInputQuestionCreationButtonState,
    submitInputQuestion,
    difficulty,
  } = props;
  return (
    <form onSubmit={handleSubmit((values) => submitInputQuestion(values, difficulty))}>
      <div>
        <Field
          name="question"
          component={renderField}
          validate={required}
          label="Question"
        />
        <Field
          name="answer"
          component={renderField}
          validate={required}
          label="Answer"
        />
        <div className="col-xs-12 no-padding text-right padding-top-30">
          <button
            type="submit"
            style={{ marginRight: 10 }}
            className="btn btn-primary"
            disabled={submittingInputQuestionCreationButtonState}
          >
            { submittingInputQuestionCreationButtonState
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
  submitInputQuestion: PropTypes.func.isRequired,
  submittingInputQuestionCreationButtonState: PropTypes.bool.isRequired,
  difficulty: PropTypes.number.isRequired,
};

