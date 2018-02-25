/**
 *
 * InputQuestionCreation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { selectSubmitInputQuestionCreationButtonState } from './selectors';
import reducer from './reducer';
import { submitInputQuestion } from './actions';
import InputQuestionCreationComponent from '../../../../components/Company/QuestionCreation/InputQuestionCreation/Loadable';
export class InputQuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <InputQuestionCreationComponent
        submitInputQuestion={this.props.submitInputQuestion}
        submittingInputQuestionCreationButtonState={this.props.submittingInputQuestionCreationButtonState}
      />
    );
  }
}

InputQuestionCreation.propTypes = {
  submitInputQuestion: PropTypes.func.isRequired,
  submittingInputQuestionCreationButtonState: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    submittingInputQuestionCreationButtonState: selectSubmitInputQuestionCreationButtonState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitInputQuestion: (evt) => dispatch(submitInputQuestion(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'inputQuestionCreation', reducer });

export default compose(
  withReducer,
  withConnect,
)(InputQuestionCreation);
