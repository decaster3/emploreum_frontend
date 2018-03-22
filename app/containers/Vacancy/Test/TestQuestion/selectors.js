import { createSelector } from 'reselect';

/**
 * Direct selector to the testQuestion state domain
 */
// const selectTestQuestionDomain = (state) => state.get('testQuestion');
const selectTestQuestionDomain = (state) => state.get('testQuestion').get('question');
const selectTestQuestionAllDomain = (state) => state.get('testQuestion');

export const selectTestQuestionStatus = createSelector(
  selectTestQuestionDomain,
  (questionsStatus) => questionsStatus.get('status')
);

export const selectTestQuestion = createSelector(
  selectTestQuestionDomain,
  (questionsItems) => questionsItems.get('item').toJS()
);

export const selectSubmitQuestionButtonState = createSelector(
  selectTestQuestionAllDomain,
  (submittingQuestion) => submittingQuestion.get('submittingQuestion')
);


/**
 *
 * TestQuestion
 *
 */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { Redirect } from 'react-router-dom';
// import { PulseLoader } from 'react-spinners';

// import injectReducer from 'utils/injectReducer';
// import { selectFirstQuestion,
//   selectTestQuestionStatus,
//   selectTestQuestion,
//   selectSubmitQuestionButtonState,
//   selectTestCurrentQuestion,
//  } from './selectors';
// import { getQuestion, submitQuestion, clearReducer } from './actions';
// import reducer from './reducer';
// import Question from '../../../../components/Vacancy/Test/Question/Loadable';

// export class TestQuestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   componentDidMount() {
//     if (this.props.currentTestQuestion.id) {
//       this.props.getQuestion(this.props.currentTestQuestion.id);
//     } else {
//       this.props.getQuestion(this.props.firstQuestionId);
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (this.props.currentQuestion && nextProps.currentQuestion !== this.props.currentQuestion) {
//       this.props.getQuestion(nextProps.currentQuestion);
//     }
//   }
//   componentWillUnmount() {
//     this.props.clearReducer();
//   }

//   renderQuestion() {
//     if (this.props.questionStatus === 'LOADING') {
//       return (<PulseLoader color={'#0081c2'} size={20} />);
//     }
//     return (
//       <Question
//         type={this.props.question.type}
//         name={this.props.question.name}
//         answers={this.props.question.answers ? this.props.question.answers : undefined}
//         submittingQuestion={this.props.submittingQuestion}
//         submitQuestion={this.props.submitQuestion}
//       />
//     );
//   }


// TestQuestion.propTypes = {
//   firstQuestionId: PropTypes.number,
//   currentQuestion: PropTypes.number,
//   currentTestQuestion: PropTypes.object,
//   getQuestion: PropTypes.func,
//   submitQuestion: PropTypes.func,
//   question: PropTypes.object,
//   questionStatus: PropTypes.string,
//   submittingQuestion: PropTypes.bool,
//   clearReducer: PropTypes.func,
// };

// function mapStateToProps(state) {
//   return {
//     firstQuestionId: selectFirstQuestion(state),
//     question: selectTestQuestion(state),
//     questionStatus: selectTestQuestionStatus(state),
//     submittingQuestion: selectSubmitQuestionButtonState(state),
//     currentTestQuestion: selectTestCurrentQuestion(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getQuestion: (evt) => dispatch(getQuestion(evt)),
//     submitQuestion: (evt, ev) => dispatch(submitQuestion(evt, ev)),
//     clearReducer: () => dispatch(clearReducer()),
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'testQuestion', reducer });

// export default compose(
//   withReducer,
//   withConnect,
// )(TestQuestion);
