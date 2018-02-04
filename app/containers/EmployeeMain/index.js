/**
 *
 * EmployeeMain
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
import makeSelectEmployeeMain from './selectors';
import reducer from './reducer';
import messages from './messages';

export class EmployeeMain extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>EmployeeMain</title>
          <meta name="description" content="Description of EmployeeMain" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

EmployeeMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeemain: makeSelectEmployeeMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeMain', reducer });

export default compose(
  withReducer,
  withConnect,
)(EmployeeMain);
