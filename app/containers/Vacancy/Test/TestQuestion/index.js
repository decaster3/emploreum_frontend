/**
 *
 * TestQuestion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import {
  selectTestQuestionStatus,
  selectTestQuestion,
  selectSubmitQuestionButtonState,
 } from './selectors';
import { getQuestion, submitQuestion, clearReducer } from './actions';
import reducer from './reducer';
import Question from '../../../../components/Vacancy/Test/Question/Loadable';

export class TestQuestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getQuestion(this.props.testCurrentQuestion.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.testCurrentQuestion && nextProps.testCurrentQuestion.id !== this.props.testCurrentQuestion.id) {
      this.props.getQuestion(nextProps.testCurrentQuestion.id);
    }
  }
  componentWillUnmount() {
    this.props.clearReducer();
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
      />
    );
  }

  render() {
    const question = this.renderQuestion();
    return (
      <div>
        { question }
      </div>
    );
  }
}

TestQuestion.propTypes = {
  testCurrentQuestion: PropTypes.object,
  getQuestion: PropTypes.func,
  submitQuestion: PropTypes.func,
  question: PropTypes.object,
  questionStatus: PropTypes.string,
  submittingQuestion: PropTypes.bool,
  clearReducer: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    question: selectTestQuestion(state),
    questionStatus: selectTestQuestionStatus(state),
    submittingQuestion: selectSubmitQuestionButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestion: (evt) => dispatch(getQuestion(evt)),
    submitQuestion: (evt, ev) => dispatch(submitQuestion(evt, ev)),
    clearReducer: () => dispatch(clearReducer()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testQuestion', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestQuestion);
