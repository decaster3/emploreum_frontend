/**
 *
 * CompanyMain
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
import makeSelectCompanyMain from './selectors';
import reducer from './reducer';
import messages from './messages';

export class CompanyMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>CompanyMain</title>
          <meta name="description" content="Description of CompanyMain" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

CompanyMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  companymain: makeSelectCompanyMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyMain', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyMain);
