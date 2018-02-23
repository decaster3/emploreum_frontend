/**
 *
 * QuestionCreation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectQuestionCreation from './selectors';
import reducer from './reducer';
import messages from './messages';

export class QuestionCreation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>QuestionCreation</title>
          <meta name="description" content="Description of QuestionCreation" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

QuestionCreation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questioncreation: makeSelectQuestionCreation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'questionCreation', reducer });

export default compose(
  withReducer,
  withConnect,
)(QuestionCreation);
