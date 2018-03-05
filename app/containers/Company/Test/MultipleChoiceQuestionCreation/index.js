/**
 *
 * MultipleChoiceQuestionCreation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectSubmitMultipleQuestionCreationButtonState } from './selectors';
import reducer from './reducer';
import { submitMultipleQuestion, clearReducer } from './actions';
import MultipleChoiceQuestionCreationCompoenent from '../../../../components/Company/QuestionCreation/MultipleChoiceQuestionCreation/Loadable';
export class MultipleChoiceQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    this.props.clearReducer();
  }
  render() {
    return (
      <MultipleChoiceQuestionCreationCompoenent
        submitMultipleQuestion={this.props.submitMultipleQuestion}
        submittingMultipleQuestionCreation={this.props.submittingMultipleQuestionCreation}
      />
    );
  }
}

MultipleChoiceQuestionCreation.propTypes = {
  clearReducer: PropTypes.func.isRequired,
  submitMultipleQuestion: PropTypes.func.isRequired,
  submittingMultipleQuestionCreation: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    submittingMultipleQuestionCreation: selectSubmitMultipleQuestionCreationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitMultipleQuestion: (evt, ev) => dispatch(submitMultipleQuestion(evt, ev)),
    clearReducer: () => dispatch(clearReducer()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'multipleChoiceQuestionCreation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MultipleChoiceQuestionCreation);
