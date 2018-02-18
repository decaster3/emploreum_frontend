/**
 *
 * Candidates
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
import makeSelectCandidates from './selectors';
import reducer from './reducer';
import messages from './messages';

export class Candidates extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Candidates</title>
          <meta name="description" content="Description of Candidates" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Candidates.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  candidates: makeSelectCandidates(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'candidates', reducer });

export default compose(
  withReducer,
  withConnect,
)(Candidates);
