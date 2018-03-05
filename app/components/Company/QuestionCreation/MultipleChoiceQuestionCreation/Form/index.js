import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import { renderField } from '../../../../../forms/fields/FormVacancyCreationField';
// import { required } from '../../../../../forms/validation/RequiredValidation';


class MultipleQuestionCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeAnswersQuantity: 1,
      trueAnswersQuantity: 1,
    };
  }
  addFakeAnswer = (event) => {
    event.preventDefault();
    this.setState({
      fakeAnswersQuantity: this.state.fakeAnswersQuantity + 1,
    });
  }

  addTrueAnswer = (event) => {
    event.preventDefault();
    this.setState({
      trueAnswersQuantity: this.state.trueAnswersQuantity + 1,
    });
  }

  renderFakeAnswers() {
    return [...Array(this.state.fakeAnswersQuantity).keys()].map((ans) => (
      <Field
        key={ans}
        name={`fakeAnswer${ans + 1}`}
        component={renderField}
        label={`Fake ${ans + 1}`}
      />
    ));
  }

  renderTrueAnswers() {
    return [...Array(this.state.trueAnswersQuantity).keys()].map((ans) => (
      <Field
        key={ans}
        name={`trueAnswer${ans + 1}`}
        component={renderField}
        label={`True ${ans + 1}`}
      />
    ));
  }

  render() {
    const fakeAnswers = this.renderFakeAnswers();
    const trueAnswers = this.renderTrueAnswers();
    return (
      <form onSubmit={this.props.handleSubmit((values) => this.props.submitMultipleQuestion(values, this.props.difficulty))}>
        <div>
          <Field
            name={'question'}
            component={renderField}
            label="Question"
          />
          { fakeAnswers }
          { trueAnswers }
          <div className="padding-top-30">
            <button className="btn btn-default" onClick={this.addFakeAnswer}>Add fake answer</button>
            <button className="btn btn-default" onClick={this.addTrueAnswer}>Add true answer</button>
          </div>
          <div className="col-xs-12 no-padding text-right padding-top-30">
            <button
              type="submit"
              style={{ marginRight: 10 }}
              className="btn btn-primary"
              disabled={this.props.submittingMultipleQuestionCreation}
            >
              { this.props.submittingMultipleQuestionCreation
                ? <SyncLoader color={'#ffffff'} size={5} />
                : <span>Submit</span>
              }
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'FormMultipleQuestionCreation',
})(MultipleQuestionCreationForm);

MultipleQuestionCreationForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitMultipleQuestion: PropTypes.func.isRequired,
  submittingMultipleQuestionCreation: PropTypes.bool.isRequired,
  difficulty: PropTypes.number.isRequired,
};

