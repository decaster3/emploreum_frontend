/**
 *
 * TestEdit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import injectReducer from 'utils/injectReducer';
import {
  selectTestQuestionsStatus,
  selectTestQuestions,
  selectTestInfo,
  selectTestInfoStatus,
} from './selectors';
import reducer from './reducer';
import { getQuestionsAndTestInfo } from './actions';
import Question from '../../../../components/Company/TestEdit/Question/Loadable';
import TextEditMain from '../../../../components/Company/TestEdit/Loadable';

export class TestEdit extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getQuestionsAndTestInfo(this.props.match.params.id);
  }
  renderQuestions() {
    if (this.props.testStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.testQuestions.map((question) =>
      (<Question
        key={question.id}
        question={question}
      />)
    );
  }
  render() {
    const questions = this.renderQuestions();
    return (
      <TextEditMain
        questions={questions}
        testInfo={this.props.testInfo}
      />
    );
  }
}

TestEdit.propTypes = {
  match: PropTypes.object,
  getQuestionsAndTestInfo: PropTypes.func.isRequired,
  testQuestions: PropTypes.array,
  testStatus: PropTypes.string,
  testInfo: PropTypes.object,
  // testInfoStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    testInfo: selectTestInfo(state),
    testInfoStatus: selectTestInfoStatus(state),
    testQuestions: selectTestQuestions(state),
    testStatus: selectTestQuestionsStatus(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getQuestionsAndTestInfo: (evt) => dispatch(getQuestionsAndTestInfo(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testEdit', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestEdit);
