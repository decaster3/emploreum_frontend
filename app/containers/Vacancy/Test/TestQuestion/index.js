/**
 *
 * TestQuestion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import { selectFirstQuestion,
  selectTestQuestionStatus,
  selectTestQuestion,
  selectSubmitQuestionButtonState,
  selectTestCurrentQuestion,
 } from './selectors';
import { getQuestion, submitQuestion, submitMultipleQuestion } from './actions';
import { changeCurrentQuestion } from '../TestNavigation/actions';
import reducer from './reducer';
import Question from '../../../../components/Vacancy/Test/Question/Loadable';

export class TestQuestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getQuestion(this.props.currentTestQuestion.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentQuestion && nextProps.currentQuestion !== this.props.currentQuestion) {
      this.props.getQuestion(this.props.currentTestQuestion.id);
      console.log(this.props.currentTestQuestion)
      // this.props.changeCurrentQuestion(this.props.currentTestQuestion);
    }
  }

  renderQuestion() {
    if (this.props.questionStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return (
      <Question
        type={this.props.question.type}
        name={this.props.question.name}
        answers={this.props.question.answers ? this.props.question.answers : undefined}
        submittingQuestion={this.props.submittingQuestion}
        submitQuestion={this.props.submitQuestion}
        submitMultipleQuestion={this.props.submitMultipleQuestion}
      />
    );
  }

  render() {
    const question = this.renderQuestion();
    if (this.props.currentQuestion) {
      return (
        <div>
          { question }
        </div>
      );
    }
    return (
      <Redirect
        to={`${this.props.firstQuestionId}`}
      />
    );
  }
}

TestQuestion.propTypes = {
  firstQuestionId: PropTypes.number,
  currentQuestion: PropTypes.number,
  currentTestQuestion: PropTypes.object,
  getQuestion: PropTypes.func,
  submitMultipleQuestion: PropTypes.func,
  submitQuestion: PropTypes.func,
  changeCurrentQuestion: PropTypes.func,
  question: PropTypes.object,
  questionStatus: PropTypes.string,
  submittingQuestion: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    firstQuestionId: selectFirstQuestion(state),
    question: selectTestQuestion(state),
    questionStatus: selectTestQuestionStatus(state),
    submittingQuestion: selectSubmitQuestionButtonState(state),
    currentTestQuestion: selectTestCurrentQuestion(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestion: (evt) => dispatch(getQuestion(evt)),
    submitQuestion: (evt) => dispatch(submitQuestion(evt)),
    submitMultipleQuestion: (evt) => dispatch(submitMultipleQuestion(evt)),
    changeCurrentQuestion: (evt) => dispatch(changeCurrentQuestion(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testQuestion', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestQuestion);
