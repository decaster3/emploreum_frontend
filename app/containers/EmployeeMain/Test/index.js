/**
 *
 * Test
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
import {makeSelectTest} from './selectors';
import reducer from './reducer';
import messages from './messages';
import {
  defaultAction
} from './actions';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Employee Profile</title>
          <meta name="description" content="Employee Profile" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <p onClick={() => this.props.defaultAction()}> counter {this.props.test.counter}
        </p>
      </div>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectTest(),
});

function mapDispatchToProps(dispatch) {
  return {
    defaultAction: () => dispatch(defaultAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'test', reducer });

export default compose(
  withReducer,
  withConnect,
)(Test);
