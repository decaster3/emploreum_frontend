/**
 *
 * TestStart
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
import makeSelectTestStart from './selectors';
import reducer from './reducer';
import messages from './messages';

export class TestStart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TestStart</title>
          <meta name="description" content="Description of TestStart" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

TestStart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  teststart: makeSelectTestStart(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'testStart', reducer });

export default compose(
  withReducer,
  withConnect,
)(TestStart);
