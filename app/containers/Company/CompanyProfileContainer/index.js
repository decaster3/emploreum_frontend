/**
 *
 * CompanyProfileContainer
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
import makeSelectCompanyProfileContainer from './selectors';
import reducer from './reducer';
import messages from './messages';

export class CompanyProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>CompanyProfileContainer</title>
          <meta name="description" content="Description of CompanyProfileContainer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

CompanyProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  companyprofilecontainer: makeSelectCompanyProfileContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyProfileContainer', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyProfileContainer);
